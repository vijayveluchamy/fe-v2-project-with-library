# Fiori Elements v2 app consuming a reusable library

There are 2 directories in this project
- `com.myorg.library1` - The reusable UI5 library
- `project1` - The FE v2 project

## Setting up the projects

```sh
# Setting up the reusable library
cd com.myorg.library1
npm install
npm run build

# Setting up the Fiori Elements project
cd ../project1
npm install
# Opens the project in browser
npm run start-local
```

## How to see the reusable component from the FE project
When Fiori Elements project is opened in the browser,
- Press "Show Reusable Component" button on the table toolbar.
- Notice that a dialog appears which contains the reusable component created on the library `com.myorg.library1` 

## How did we consume the reusable library on FE
Mostly we followed the steps from the blog https://community.sap.com/t5/technology-blog-posts-by-members/integrate-a-ui5-library-in-a-ui5-app-using-typescript/ba-p/13532820

Below is the brief of changes made on "project1"
### Changes on tsconfig.json
- Changed `rootDir` into `"rootDirs": ["./webapp"]`
- Added the `com.myorg.library1` related files on `paths` and `include`

### Mapping the library resource path on ui5-local.yaml
Created mapping for library resources using `ui5-middleware-servestatic` middleware

### manifest.json
- Added the library as a dependency
- Registered the extension controller `project1.ext.controller.ListReportExt`
- Created a custom action `ShowReusableComponent`

### ListReportExt.controller.js
Implemented the method `onShowReusableComponent` for showing the reusable component on a dialog

