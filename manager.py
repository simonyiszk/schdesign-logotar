import json
import pathlib
import argparse
import toml
from dataclasses import dataclass, field, asdict


@dataclass
class Logo:
    filename: str
    path: str


@dataclass
class Team:
    name: str
    slug: str
    logos: list[Logo] = field(default_factory=list)


@dataclass
class Category:
    name: str
    slug: str
    teams: list[Team] = field(default_factory=list)


def main(args):
    collection: list[Category] = []

    svg_folder = pathlib.Path(args.svg_path)
    categories = list(svg_folder.iterdir())
    for cat in categories:
        tempTeams: list[Team] = []
        teams = list(filter(lambda x: x.is_dir(), cat.iterdir()))
        category_config = pathlib.Path(cat, "META.toml")
        if not category_config.is_file():
            raise FileNotFoundError(f"Config file missing for {cat}")

        category_config_dict = toml.loads(category_config.read_text())

        for t in teams:
            tempLogos: list[Logo] = []
            svg_files = list(t.glob("*.svg"))
            team_config = pathlib.Path(t, "META.toml")
            if not team_config.is_file():
                raise FileNotFoundError(f"Config file missing for {t}")

            team_config_dict = toml.loads(team_config.read_text())

            for f in svg_files:
                tempLogos.append(Logo(f.name, str(pathlib.Path(*f.parts[1:]))))

            tempTeams.append(
                Team(
                    name=team_config_dict.get("name"),
                    slug=team_config_dict.get("slug"),
                    logos=tempLogos,
                )
            )

        collection.append(
            Category(
                name=category_config_dict.get("name"),
                slug=category_config_dict.get("slug"),
                teams=tempTeams,
            )
        )

    print(json.dumps([asdict(x) for x in collection]))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        prog="manager",
    )
    parser.add_argument("--svg-path")
    args = parser.parse_args()

    main(args)
