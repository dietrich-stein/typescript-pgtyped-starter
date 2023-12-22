# TypeScript-PgTyped-Starter

> ALPHA RELEASE WARNING<br><br>
> Please be advised NOT to use this until I have finished improving it. At that time I will release it as version `1.0.0` and will remove this warning.<br><br>

## Overview

This is a standalone full-stack starter project that you can customize to your liking.

📦 What's in the box?

- Node.js
- TypeScript
- PostgreSQL (Dockerized)
- MongoDB (Dockerized)
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

## MongoDB

All of the `db:postgres` commands referenced later in this document have a `db:mongo` variant the does what you would expect. Why? MongoDB is an incredibly useful tool for all kinds of situations. Most notably, when you have documents that are unstructured by nature or need to grow rapidly in an organic way it can be unwise to concern yourself with schemas too quickly. Despite many advancements with JSON in PostgreSQL it is still not as frictionless or well equipped for some tasks.

However, no other tooling around MongoDB is currently provided. For more insight into the MongoDB commands see the `scripts` section of the `package.json` file.

## Command Reference

|Command|Description|
|-------|-----------|
|`npm run db:postgres:reset`|Shuts down dockerized database container server and deletes it.|
|`npm run db:postgres:compose`|Runs the `db:reset` command and then initializes<br />the dockerized database server.<br />|
|`npm run db:postgres:start`|Starts the database server container.<br />|
|`npm run db:postgres:start`|Stops the database server container.<br />|
|`npm run pgtyped:watch`|Watches your `models/queries` SQL files for changes and generates<br /> files containing typesafe queries. Requires a terminal session.<br />|
|`npm run pgtyped:all`|Runs `db:reset`, `db:compose`, `db:start`, and then `pgtyped:watch`.<br />  Requires a terminal session. <br />|
|`npm run api:express:serve`|Runs an express-based API server with the<br /> [https://github.com/thiagobustamante/typescript-rest](typescript-rest) extension.<br /> Requires a terminal session.<br />|
|`npm run webpack:build`|Builds and bundles the front-end for development deployment.|
|`npm run webpack:build:production`|Builds and bundles the front-end for production deployment.|
|`npm run webpack:start`|Starts a local web server for development.|
|`npm run utils:prettier`|Runs the auto-formatter on the codebase.|

## Resources

Relevant links for future research and evaluation.

- https://github.com/shfrmn/pgtyped-model - Whoa. Putting this at the top.
- https://github.com/thiagobustamante/typescript-rest
  - https://github.com/vrudikov/typescript-rest-boilerplate - JWT support like theirs is needed maybe to add morgan logging as well.
    - https://github.com/thiagobustamante/typescript-rest/wiki/@Security-Decorator
    - https://github.com/jaredhanson/passport
- [Graphile Starter](https://github.com/graphile/starter) - For the purposes of this repo it's just an excellent example of a mature full-stack starter.
  - https://www.graphile.org/postgraphile/

## Notes

```
docker pull postgrest/postgrest
docker pull swaggerapi/swagger-ui
```