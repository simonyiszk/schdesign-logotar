import json
import os

from modules.Path import Path


config = {
    "database_root": os.path.join("..", "assets", "database"),
    "database_root_url": "assets/database",
    "target_json": os.path.join("..", "assets", "database", "database.json"),
    "extensions": ["ai", "svg", "png", "ttf", "otf", "jpg"]
}

root = Path(os.path.join(os.path.realpath(os.curdir), config["database_root"]))


def get_file(path, extension):
    for file in path.files:
        if file.name.endswith(extension):
            return file.webify(root.real_path, config["database_root_url"])

    print(f"Can't find file in {path.real_path} with extension .{extension}.")
    return None


def object2json2file(obj, file_name):
    try:
        with open(file_name, "wt") as file:
            file.write(json.dumps(obj, indent=2, sort_keys=True))
            print("JSON has been successfully generated.")
    except:
        print("Unable to write JSON to file.")


if __name__ == '__main__':

    obj = {
        reszort.name: {
            kör.name: {
                ext: get_file(kör, ext) for ext in config["extensions"]
            } for kör in reszort.directories
        } for reszort in root.directories
    }

    # Remove not found files
    for k1 in list(obj):
        for k2 in list(obj[k1]):
            for k3 in list(obj[k1][k2]):
                if obj[k1][k2][k3] == None:
                    # print(obj[k1][k2][k3])
                    del obj[k1][k2][k3]

    object2json2file(obj, config["target_json"])
