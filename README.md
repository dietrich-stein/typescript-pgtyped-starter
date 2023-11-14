# TypeScript-PgTyped-Starter

## Overview

This is a standalone full-stack starter project that you can customize to your liking.

📦 What's in the box?

- Node.js
- TypeScript
- PostgreSQL (Dockerized)
- PgTyped (Automatic Typesafe Query Generation)
- Express & typescript-rest (REST API)
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

## Automatic Typesafe Query Generation

1. You have "schema files", which are raw SQL files that you can maintain here: `server/api/models/schema`. They have names prefixed with numbers like `00-`, `01-`, etc. Maintain these prefixes to control the order that docker will see them on your filesystem while containerizing your database server.
2. The `db:compose` command generates a docker container for you. It uses the schema files to set up the database schema and the initial table tows.
3. You also have "query files", which are also are raw SQL files. These contain all of the queries that you need for your application. You can maintain them here: `server/api/models/queries`.
3. The `pgtyped:watch` command automatically parses your query files and on each change you save to the files it extracts all the queries and generates strictly typed TypeScript queries in `server/api/__generated__`.

## Command Reference

|Command|Description|
|-------|-----------|
|`npm run webpack:build`|Builds and bundles the front-end for development deployment.|
|`npm run webpack:build:production`|Builds and bundles the front-end for production deployment.|
|`npm run webpack:start`|Starts a local web server for development.|
|`npm run db:reset`|Shuts down dockerized database container server and deletes it.|
|`npm run db:compose`|Runs the `db:reset` command and then initializes<br />the dockerized database server.<br />|
|`npm run db:compose:production`|Runs the `db:reset` command and then initializes<br />the dockerized database server with production environment vars. It is<br /> better to use Kubernetes in actual production environments.<br />|
|`npm run db:start`|Runs the database server container using development environment vars.<br />|
|`npm run db:start:production`|Runs the database server container using production environment vars.<br />|
|`npm run pgtyped:watch`|Watches your `models/queries` SQL files for changes and generates<br /> files containing typesafe queries. Requires a terminal session.<br />|
|`npm run pgtyped:all`|Runs `db:reset`, `db:compose`, `db:start`, and then `pgtyped:watch`.<br />  Requires a terminal session. <br />|
|`npm run api:express:serve`|Runs an express-based API server with the<br /> [https://github.com/thiagobustamante/typescript-rest](typescript-rest) extension.<br /> Requires a terminal session.<br />|
|`npm run utils:prettier`|Runs the auto-formatter on the codebase.|

## Resources
- https://github.com/shfrmn/pgtyped-model - Whoa. Putting this at the top.
- https://github.com/thiagobustamante/typescript-rest
  - https://github.com/vrudikov/typescript-rest-boilerplate - JWT support like theirs is needed maybe to add morgan logging as well.
    - https://github.com/thiagobustamante/typescript-rest/wiki/@Security-Decorator
    - https://github.com/jaredhanson/passport
- [Graphile Starter](https://github.com/graphile/starter) - For the purposes of this repo it's just an excellent example of a mature full-stack starter.
  - https://www.graphile.org/postgraphile/
