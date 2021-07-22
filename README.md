# Nest 8.0.0 breaks `moduleRef` injection in dependent project

Steps to reproduce:

```shell
mkdir nest-8.0.0-moduleref-bug 
cd nest-8.0.0-moduleref-bug/
git init
# create two node libraries
npx tsdx create workspace-a
cd workspace-a
yarn add @nestjs/core @nestjs/common rxjs reflect-metadata
cd ..
npx nest create workspace-b
cd workspace-b
yarn add @nestjs/core @nestjs/common rxjs reflect-metadata
# edit package.json to follow https://classic.yarnpkg.com/en/docs/workspaces/ to add two workspaces
touch package.json
```
