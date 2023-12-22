# TypeScript-PgTyped-Starter

## Overview

This is a standalone full-stack starter project that you can customize to your liking. A couple of important things to note:

- You won't need everything this starter provides, but it was designed to make it easy to add and remove things
- Single-purpose docker services and service-specific environment [dotenv](https://github.com/motdotla/dotenv) vars make things simple
- A fully realized collection of useful NPM `scripts` is provided for easy administration

This repo is under active development. As such, there is duplication of functionality in some regards and missing functionality in others.

For instance, with regard to duplication of functionality, this repo began with Express and TypeScript-REST as the out-of-the-box solution for developing your own custom API. This was to provide a minimal example. It still works and was not removed. However, using a database-as-truth solution to auto-generate API functionality is often a much faster way to get started. Later, PostgREST was added to fill this need and in recognition of the necessity of CRUD-style endpoints as the most common necessity for rapid application development. At some point the legacy example and the PostgREST functionality will be integrated by code and/or reconciled by better documentation.

And, addressing missing functionality, you will notice that the `init.sql` file does not currently integrate or match with the SQL used elsewhere in the repo. Additionally, the CRUD functionality in the web frontend pages is incomplete to say the least.

The future direction of this starter is to fix these issues and exit the ALPHA development stage while preserving demonstrations of "vanilla", "barebones", or "custom" solutions and continuing to integrate open source solutions for common development needs that make the best possible use of typesafe query generation.

📦 What's in the box?

- [Node.js 18.18.2](https://github.com/nodejs/node)
- [TypeScript 5.3.x](https://github.com/microsoft/TypeScript)
- [PostgreSQL 14.6](https://github.com/postgres/postgres) (Dockerized)
- [PostgREST 12](https://github.com/PostgREST/postgrest) (Dockerized)
- [Swagger UI 5](https://github.com/swagger-api/swagger-ui/) (Dockerized)
- [PgTyped](https://github.com/adelsz/pgtyped)
- [MongoDB 6](https://github.com/mongodb/mongo) (Dockerized)
- Backend: Express & typescript-rest (REST API)
- Frontend: Webpack 5, Babel 7, Sass/SCSS

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
2. The `compose` command generates a docker container for you. It uses the schema files to set up the database schema and the initial table tows.
3. You also have "query files", which are also are raw SQL files. These contain all of the queries that you need for your application. You can maintain them here: `server/api/models/queries`.
3. The `pgtyped:watch` command automatically parses your query files and on each change you save to the files it extracts all the queries and generates strictly typed TypeScript queries in `server/api/__generated__`.

## MongoDB

All of the `postgres` commands referenced later in this document have a `mongo` variant the does what you would expect. Why? MongoDB is an incredibly useful tool for all kinds of situations. Most notably, when you have documents that are unstructured by nature or need to grow rapidly in an organic way it can be unwise to concern yourself with schemas too quickly. Despite many advancements with JSON in PostgreSQL it is still not as frictionless or well equipped for some tasks. However, no other tooling around MongoDB is currently provided.

## Command Reference (Incomplete)

This is only a partial list of the commands currently available. For more information see the `scripts` section of the `package.json` file.

|Command|Description|
|-------|-----------|
|`npm run postgres:reset`|Shuts down the dockerized database server and deletes it.|
|`npm run postgres:compose`|Runs the `reset` command and then creates<br />the dockerized database server.<br />|
|`npm run postgres:start`|Starts the database server.<br />|
|`npm run postgres:stop`|Stops the database server.<br />|
|`npm run postgres:logs`|Shows an actively-updated list of the most recent logs.<br />|
|`npm run postgres:bash`|Opens a shell prompt inside the database server.<br />|
|`npm run postgres:extensions`|Shows the active extensions of the database server.<br />|
|`npm run pgtyped:watch`|Watches your `models/queries` SQL files for changes and generates<br /> files containing typesafe queries. Requires a terminal session.<br />|
|`npm run pgtyped:all`|Runs `reset`, `compose`, `start`, and then `pgtyped:watch`.<br /> Note: Requires a dedicated terminal or screen session.<br />|
|`npm run api:start`|Starts a custom express-based API server with the<br /> [typescript-rest](https://github.com/thiagobustamante/typescript-rest) extension.<br /> Note: Requires a dedicated terminal or screen session.<br />|
|`npm run docker:show`|Shows all of the docker containers, volumes, images, and networks.|
|`npm run webpack:build`|Builds and bundles the front-end for deployment.|
|`npm run webpack:start`|Starts a local front-end web server.|
|`npm run prettier`|Runs the auto-formatter on the codebase.|

## Resources

Relevant links for future research and evaluation.

- https://github.com/shfrmn/pgtyped-model
- https://github.com/thiagobustamante/typescript-rest
  - https://github.com/vrudikov/typescript-rest-boilerplate
    - https://github.com/thiagobustamante/typescript-rest/wiki/@Security-Decorator
    - https://github.com/jaredhanson/passport
- [Graphile Starter](https://github.com/graphile/starter) - For the purposes of this repo it's just an excellent example of a mature full-stack starter.
  - https://www.graphile.org/postgraphile/
