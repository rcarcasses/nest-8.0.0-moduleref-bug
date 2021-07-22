# `moduleRef` instance not injected in dependent module


# TL;DR

I'm writing my findings here as I couldn't post back the solution in the correspondent github issue 
as the thread was locked: the problem arises only in version 8.x.x and is not present in 7.x.x.

For more information see [this ticket](https://github.com/nestjs/nest/issues/7568) (also locked, what's wrong with
you guys? :))

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
