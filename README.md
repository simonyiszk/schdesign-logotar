# Schdesign Logótár

The logo library of Schönherz Design Stúdió.

http://schdesign-logotar.netlify.com

## "Database"

### Location

The necessary files for the database are available at this location:

> [assets/database](assets/database)

### Structure

It should have 2 levels of directories. The first level is dynamically displayed on the website. The second level of folders are displayed as cards.

### Necessary files

Currently supported file formats: `svg`, `png`, `ai`.

> This can be easily changed [here](database_generator/main.py).

On the website only the `.png` files will be displayed. The others may be downloaded by clicking a link.

### Changing the "database"

On modifying the folder structure it is necessary to update the database.json file. Further information on this topic can be found in the [README](database_generator/README.md) of database_generator.
