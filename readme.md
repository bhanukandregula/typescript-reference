### These are the list of commands to execute before we compile Typescript
> - node --version
> - npm --version
> - sudo npm install -g typescript
> - tsc --version

#### This flag is to set version of ES while we compile ther TS code.
##### --noEmitonError won't generate .JS files If there is any error in the TS code
> - tsc --target ES5 --noEmitonError Customer.js

#### To generate the default tsconfig.json file
##### This will help us to reduce the flats in cmd while we are compiling,and we can have htem configured in tscoinfig.json file.
> - tsc --init

#### This will remove the .js files which are generated.
##### This will work only where there is tsconfig.json file location
> - tsc --build --clean