# JSON generator

A JSON generator for the "database" folder.

## Running the program

- install python3
- optionally, change the config dictionary in main.py
- run main.py

## JSON scheme

The scheme can be best understood by looking at the underlying dictionary comprehension.

```Python
{
    reszort.name: {
        kör.name: {
            ext: get_file(kör, ext) for ext in config["extensions"]
        } for kör in reszort.directories
    } for reszort in root.directories
}
```
