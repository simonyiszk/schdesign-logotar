import json
import os

from modules.Path import Path


config = {
    "database_root": os.path.join("..", "assets", "database"),
    "database_root_url": "assets/database",
    "target_json": os.path.join("..", "assets", "database", "database.json"),
    "extensions": ["ai", "psd", "svg", "png", "ttf", "otf", "jpg", "preview"]
}

root = Path(os.path.join(os.path.realpath(os.curdir), config["database_root"]))

allfiles = ["asd"]


def check_file(fname):
    for ef in allfiles:
        if fname == ef:
            return True
    return False


def get_file(path, extension):
    if extension == "preview":
        extension = "png"
    for file in path.files:
        if file.name.endswith(extension):
            # print(file.real_path)
            if check_file(file.real_path):
                # print(allfiles)
                continue
            else:
                allfiles.append(file.real_path)
                asd = file.webify(root.real_path, config["database_root_url"])
                # print(asd)
                return asd

    #print(f"Can't find file in {path.real_path} with extension .{extension}.")
    return None


def object2json2file(obj, file_name):
    try:
        with open(file_name, "wt") as file:
            file.write(json.dumps(obj, indent=2, sort_keys=True))
            print("JSON has been successfully generated.")
    except:
        print("Unable to write JSON to file.")


if __name__ == '__main__':

    """
    Mire rájöttem hogy ez wtf, holy moly
    """

    """
    obj = {
        reszort.name: {
            kör.name: {
                ext: get_file(kör, ext) for ext in config["extensions"]
            } for kör in reszort.directories
        } for reszort in root.directories
    }
    """

    obj = {}

    for reszort in root.directories:

        if reszort.name != "Temp" and reszort.name != "Ref":
            asd1 = {}
            for kör in reszort.directories:
                asd2 = {}
                for ext in config["extensions"]:
                    fájl = get_file(kör, ext)
                    asd2[ext] = fájl
                asd1[kör.name] = asd2
            obj[reszort.name] = asd1

    for k1 in list(obj):
        # print(k1)
        # print(obj[k1])
        for k2 in list(obj[k1]):
            # print(k2)
            for k3 in list(obj[k1][k2]):
                # print(obj[k1][k2][k3])
                """
                # Check for preview files
                if k3 == "preview":
                    if obj[k1][k2][k3] != None:
                        obj[k1][k2][k3] = obj[k1][k2][k3][:-8]
                        #print(obj[k1][k2][k3])
                """
                # Remove not found files
                if obj[k1][k2][k3] == None:
                    # print(obj[k1][k2][k3])
                    del obj[k1][k2][k3]

    # print(obj)

    object2json2file(obj, config["target_json"])
