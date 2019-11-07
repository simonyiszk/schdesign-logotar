# Schdesign Logótár

The logo library of Schönherz Design Stúdió.

http://schdesign-logotar.netlify.com

http://schdesign.hu/logotarbeta

## "Database"

### Location

The necessary files for the database are available at this location:

> [assets/database](assets/database)

### Structure

It should have 2 levels of directories. The first level is dynamically displayed on the website. The second level of folders are displayed as cards. The third level are the files which are represented as download buttons ont the cards.

**The database is case-sensitive in the database keys and also in the file structure!**

Previews should be created with the name `preview` in the database, these won't get a download link generated.

### Necessary files

Currently supported file formats: `svg`, `png`, `ai`, `ttf`, `otf`. (This is only a limitation in the database generator, any other file can be added by hand.)

Previews should be png files with .preview added to their name as a fake extension.

The others may be downloaded by clicking a link.

### Changing the "database"

On modifying the folder structure it is necessary to update the database.json file. Further information on this topic can be found in the [README](database_generator/README.md) of database_generator.
