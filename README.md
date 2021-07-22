# `moduleRef` instance not injected in dependent module

Steps to reproduce:

```shell
mkdir nest-8.0.0-moduleref-bug 
cd nest-8.0.0-moduleref-bug/
git init
# create a node library
npx tsdx create workspace-a
cd workspace-a
yarn add @nestjs/core @nestjs/common rxjs reflect-metadata
cd ..
# create a nest application
nest create workspace-b
cd workspace-b
...
# edit package.json to follow https://classic.yarnpkg.com/en/docs/workspaces/ to add two workspaces
```

Notice that we are using `tsdx build --target node` for building workspace `a`.
