# Typescript Starter

> 🚧 Advisory: This branch of this repo recently underwent some rushed improvements. Specifically, the final three bullet points in the list below happened real fast and without enough care to make things nice to polish things up.

## Overview

This is a standalone starter project that you can customize to your liking right out of the box. Here is a bullet list showing some of the more notable things going on:

- TypeScript
- Sass/SCSS
- Babel
- Webpack
- Dockerized Posgres
- Automatic Typesafe Query Generation (PgTyped)
- REST API Server (typescript-rest)

Here are some suggestions of what to do first:

- Decide what to do about the git history if you cloned this repo. Leave it? Cool.
- Change the project info the `package.json` file.
- Update the dependencies?

> Please note: This is not a template-based solution at this time. If it were, it would probably be a project-generator or a plug-in for an existing generator that someone else made.

## Getting started

1. Clone, fork, or download this repo.
2. Run `npm i` in your terminal from the project folder to install the dependencies.

One currently excellent choice is to use degit to liberate this repo from it's history while also maintaining it in a local cache for future use.

For this, start by installing degit with `npm install -g degit` if you don't already have it installed.

Next, create a folder for your new project and from there run `degit dietrich-stein/typescript-starter` to bootstrap step one of this section. At this point, you still don't have version control or an upstream to push up to.

Next, go make your own empty repo and be sure to not create any default files like `README.md` or `LICENSE`. If you do, then the next steps could get messy.

Next, run this these commands to set up git to your own empty repo on GitHub:

```
git init
git remote add upstream https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch --set-upstream-to=upstream/main main
```

Try to pull with `git pull` and if things get messy then try `git pull --rebase`.

## Development

```
npm run start
```

## Builds

```
npm run build
```

## Postgres + PgTyped + typescript-rest

What?! You don't want REST? You must be looking for [PostGraphile](https://www.graphile.org/postgraphile/).

This starter isn't fancy enough for GraphQL support yet. What we do have, is a bare-bones partial implementation of an unversioned REST API. It all works using the provided NPM commands documented in the table below:

|Command|Description|
|-------|-----------|
|`npm run postgres:reset`|Removes docker things and generated SQL.<br /> You probably wont need it.|
|`npm run postgres:schema`|Generates the `sql/schema.sql` file that<br /> initializes the database within the docker<br /> things. Ignorable, probably.|
|`npm run postgres:compose`|Runs the `reset` and `schema` commands and<br /> then initializes the docker things. Useful for<br /> debugging your changes to the docker<br /> things or the schema.|
|`npm run postgres:serve`|Runs the composed docker container. About<br /> as useful as our `compose` command.|
|`npm run postgres:pgtyped:watch`|Watch your `src/foo/foo.sql` file changes<br /> and introspect the dockerized database to<br /> generate typesafe queries as<br /> `api/__generated__/foo.queries.ts`.<br /> Requires a terminal session.|
|`npm run postgres:all`|Runs `reset`, `compose`, `serve`, and `watch` all<br /> in sequence. Requires a terminal session.|
|`npm run api:rest:serve`|Runs an express-based API server with the<br /> `typescript-rest` extension.<br /> Requires a terminal session.|
