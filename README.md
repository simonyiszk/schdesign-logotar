# Schdesign Logótár
The logo library of Schönherz Design Stúdió.

http://schdesign-logotar.netlify.com
## Database
### Location
The necessary files for the database are available at this location:
> assets/database
### Necessary files
You must these files at their specifil locations:
> **Display image:** assets/database/*HOME_GROUP_ID*/*GROUP_ID*/display-image.png
> **Downloadable SVG file:** assets/database/*HOME_GROUP_ID*/*GROUP_ID*/*GROUP_ID*.svg
> **Downloadable PNG file:** assets/database/*HOME_GROUP_ID*/*GROUP_ID*/*GROUP_ID*.png
> **Downloadable AI file:** assets/database/*HOME_GROUP_ID*/*GROUP_ID*/*GROUP_ID*.ai
### ID and file path rules
#### Home Group
You **MUST** use one of the following options as a Home Group ID:
- bulis
- kofer
- kszk
- kultur
- simonyi
- sssl
- sport
- szor
- schonherz
#### Group
For Group ID you should use a lowercase plain text version of the group's name (or shortened name). For example:
- schdesign
- impulzus
### JSON Structure
#### Variables
You **MUST** ensure that these variables have value in their JSON record:
> **groupFullName:** The full name of the group.
> **groupName:** The group's ID created by rules given at chapter **_ID and file path rules_**.
> **parentGroup**: The parent group's ID. You must use one of the options from chapter **_ID and file path rules_**.
Example record:
`{
	"groupFullName": "Schönherz Design Stúdió",
	"groupName": "schdesign",
	"parentGroup": "simonyi"
}`
