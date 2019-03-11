# Schdesign Logótár
The logo library of Schönherz Design Stúdió.

http://schdesign-logotar.netlify.com
## Database
### Location
The necessary files for the database are available at this location:
> assets/database
### Necessary files
You must these files at their specifil locations:
> **Display image:** assets/database/*parentGroup*/*groupId*/display-image.png\
> **Downloadable SVG file:** assets/database/*parentGroup*/*groupId*/*groupId*.svg\
> **Downloadable PNG file:** assets/database/*parentGroup*/*groupId*/*groupId*.png\
> **Downloadable AI file:** assets/database/*parentGroup*/*groupId*/*groupId*.ai
### ID and file path rules
#### Parent Group
You **MUST** use one of the following options as a Parent Group ID:
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
You **MUST** ensure that the values for these variables are provided in their JSON record:
> **groupFullName:** The full name of the group.\
> **groupId:** The group's ID created by rules given at chapter **_ID and file path rules_**.\
> **parentGroup**: The parent group's ID. You must use one of the options from chapter **_ID and file path rules_**.\


Example record:\
`{ "groupFullName": "Schönherz Design Stúdió", "groupId": "schdesign", "parentGroup": "simonyi"}`


