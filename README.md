# Schdesign Logótár

The logo library of Schönherz Design Stúdió.

http://schdesign-logotar.netlify.com

http://schdesign.hu/logotarbeta

## "Database"

### Location

The necessary files for the database are available at this location:

> [assets/database](assets/database)

### Structure

It should have 2 levels of directories. The first level is dynamically displayed on the website. The second level of folders are displayed as cards.

**The database is case-sensitive in the database and also in the file structure!**

Logos should be created with the name `logo` in the database, these won't get a download link generated.

### Necessary files

~~Currently supported file formats: `svg`, `png`, `ai`.~~
Any file can be added, logos should be png.

> This can be easily changed [here](database_generator/main.py).

On the website only the `.png` files will be displayed. The others may be downloaded by clicking a link.

### Changing the "database"

On modifying the folder structure it is necessary to update the database.json file. Further information on this topic can be found in the [README](database_generator/README.md) of database_generator.
