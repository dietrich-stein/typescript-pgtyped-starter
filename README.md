# Typescript-PgTyped-REST-Starter

## Overview

This is a standalone full-stack starter project that you can customize to your liking. You may want to add a testing framework. A frontend framework like Svelte, Vue, or React might even be nice. If you want an ORM there are probably other starters out there that would be better suited for your needs. The rationale behind this starter is that because ORMs are great until they ain't we insist that we can write raw SQL queries to serve as the source of truth for typesafe tooling that increasingly automates the various kinds of mapping needed for entities and services.

📦 What's in the box?

#### Full stack

- Node.js
- TypeScript

#### Backend

- PostgreSQL (Dockerized)
- PgTyped (Automatic Typesafe Query Generation)
- Express & typescript-rest (REST API)

#### Frontend

- Webpack
- Babel
- Sass/SCSS

## Getting started

1. Use degit, git, or GitHub to clone, fork, or download this repo.
2. Run `npm i` in your terminal from the project folder to install the dependencies.

### Frontend

- Run `npm run start` to start the webpack development server.
- Visit: http://localhost:8080/

### Backend

- In a dedicated terminal window (or tmux, screen etc.) execute this: `npm run pgtyped:all`
  - Now you can make changes to `src/**/*.sql` files and your queries will be auto-generated in `/api/__generated__/${tableName}.queries.ts`.
- In another dedicated terminal window run: `npm run api:express:serve`
  - Now you can test those changes in your API tester or by visiting the API endpoints like: http://localhost:3000/users

## Command Reference

|Command|Description|
|-------|-----------|
|`npm run build`|Builds and bundles the front-end for deployment.|
|`npm run start`|Starts a local web server for development.|
|`npm run pretty`|Runs the auto-formatter on the codebase.|
|`npm run postgres:reset`|Removes all the docker things, and the `schema.sql`<br >file but not the generated SQL files in `api/__generated__`.<br /> You probably wont need it.<br />|
|`npm run postgres:compose`|Runs the `postgres:reset` command and then initializes<br />the docker things. Somewhat useful for debugging your<br /> changes to the docker things or the schema files in `/schema`.<br />|
|`npm run postgres:serve`|Runs the composed docker container. About<br /> as useful as our `compose` command. In a production<br /> environment this is preferable to `pgtyped:all`. Useful.<br />|
|`npm run pgtyped:watch`|Watches your `models//**/*.sql` files for changes<br /> and introspects the dockerized database to<br /> generate typesafe queries as<br /> `api/__generated__/foo.queries.ts`.<br /> Requires a terminal session. Super useful.<br />|
|`npm run pgtyped:all`|Runs `postgres:reset`, `postgres:compose`, `postgres:serve`, and `pgtyped:watch` all<br /> in sequence. Requires a terminal session. Super useful.<br />|
|`npm run api:express:serve`|Runs an express-based API server with the<br /> `typescript-rest` extension.<br /> Requires a terminal session. Super useful.<br />|

## Resources
- https://github.com/shfrmn/pgtyped-model - Whoa. Putting this at the top.
- https://github.com/thiagobustamante/typescript-rest
  - https://github.com/vrudikov/typescript-rest-boilerplate - JWT support like theirs is needed maybe to add morgan logging as well.
    - https://github.com/thiagobustamante/typescript-rest/wiki/@Security-Decorator
    - https://github.com/jaredhanson/passport
- [Graphile Starter](https://github.com/graphile/starter) - For the purposes of this repo it's just an excellent example of a mature full-stack starter.
  - https://www.graphile.org/postgraphile/
