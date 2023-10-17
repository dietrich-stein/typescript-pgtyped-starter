# Typescript-Starter

> 🚧 Advisory: This branch of this repo recently underwent some rushed improvements. Specifically, the final three bullet points in the list below happened real fast and without enough care to make things nice to polish things up.

## Overview

This is a standalone full-stack starter project that you can customize to your liking right out of the box.

What kind of stack is it? It doesn't adhere to any widely recognized 4-letter acronym at this time:

- PostgreSQL
- Express
- TypeScript
- Node.js

Ideally, while Express would continue to handle API duties, I would replace Webpack with Vite and then implement a `/plugins` folder and some new npm commands to "install" either plain TypeScript as it is now, React, Vue, or Svelte from template files.

What stack would it be then? PERN/PEVN/PESN? Ugh. Let's just not? Whatever letters you wanna use for it, here is a bullet list showing some of the more notable things going on in here:

- TypeScript
- Sass/SCSS
- Babel
- Webpack
- Backend: Dockerized PostgreSQL
- Backend: Automatic Typesafe Query Generation (PgTyped)
- Backend: REST API Server (typescript-rest)

Here are some suggestions of what to do first:

- Decide what to do about the git history if you cloned this repo. Leave it? Cool.
- Change the project info the `package.json` file?
- Update the dependencies?

## Getting started

1. Use degit, git, or GitHub to clone, fork, or download this repo. (see note below)
2. Run `npm i` in your terminal from the project folder to install the dependencies.
3. Run `npm run start` to start the webpack development server.
4. Visit: http://localhost:8080/

### A Note On Degit
One currently excellent choice for starter/boilerplate repos is to use degit to liberate them from their history while also maintaining them in a local cache for future use, potentially while offline even.

To get started installing degit with `npm install -g degit` if you don't already have it.

Next, create a folder for your new project and from there run `degit dietrich-stein/typescript-starter` to bootstrap step one of this section. At this point, you still don't have version control or an upstream to push up to.

Next, go make your own empty repo and be sure to not create any default files like `README.md` or `LICENSE`. If you do, then the next steps could get messy.

Next, run this these commands to set up git to your own empty repo on GitHub:

```
git init
git remote add upstream https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch --set-upstream-to=upstream/main main
```

Try to pull with `git pull` and if things get messy then try `git pull --rebase`.

## Frontend: Development

```
npm run start
```

## Frontend: Builds

```
npm run build
```

## Backend: Dockerized PostgreSQL

You need a relational database. Or, maybe you just need a searchable unstructured document store? PostgreSQL has you [covered](https://www.postgresql.org/docs/9.5/functions-json.html) either way.

We use docker because containerization ensures that service environment has the required dependencies and because it prevents the need for file systems changes outside of the root folder. Also, Docker itself works really well in all kind of development environments. Also, a lot of other reasons. It's just cool man. Are you some kind of containerization nerd or something? Get outta here! Go dockerize something.

## Backend: Automatic Typesafe Query Generation (PgTyped)

Have you learned to hate ORMs yet? If not, it's cool. TypeORM looks like some sugary goodness. No one is judging. On the other hand, maybe you ARE a bit tired of not being able to build queries however you want. Maybe the lack of extensibility or the added fragility has finally gotten to you? Maybe, you ran into one to many gotchas due to poor documentation or some strange quirk seemingly taunting you from deep within the byzantine layers of abstraction protecting you from your old friend; raw SQL.

If you just want to write SQL queries and not have wire them up to the API by hand then this is your starter. Thanks to [PgTyped](https://pgtyped.dev/) your `.sql` files in this repo are the source of truth. There's one or two annotations you need to learn to get the most out of it. But for the most part, consider it a solved problem!

## Backend: REST API Server (typescript-rest)

> ⚠ Warning: This thing is in an **ALPHA** state.

### Wish List
- Path-based semver API versioning (ex: `/0.0.1/books`)
- JSON-Schema contracts
- JWT-based authentication
  - https://github.com/thiagobustamante/typescript-rest/wiki/@Security-Decorator
- Role-based authorization

Everyone wants GraphQL. I want GraphQL. I could've dropped [PostGraphile](https://www.graphile.org/postgraphile/) on this starter. The reason I didn't is because I'm of the opinion that a starter should serve the creator's needs best of all. That's the difference between a framework and a starter. If this were a framework I would've chosen GraphQL and there would be premium plug-ins and and a theme market and all that jazz.

This is just a humble starter. It isn't fancy enough for GraphQL support yet. What we do have is a bare-bones partial implementation of an unversioned REST API. It all works using the provided NPM commands documented in the table below!

|Command|Description|Utility|
|-------|-----------|-------|
|`npm run postgres:reset`|Removes all the docker things, and the `schema.sql`<br >file but not the generated SQL files in `api/__generated__`.<br /> You probably wont need it.<br />|⭐|
|`npm run postgres:schema`|Generates the `sql/schema.sql` file that initializes<br /> the database within the docker<br /> things once the start up for the first time. Ignorable, probably.<br />|⭐|
|`npm run postgres:compose`|Runs the `reset` and `schema` commands and<br /> then initializes the docker things. Somewhat useful for<br /> debugging your changes to the docker<br /> things or the schema.<br />|⭐⭐⭐|
|`npm run postgres:serve`|Runs the composed docker container. About<br /> as useful as our `compose` command. In a production<br /> environment this is preferable to `postgres:all`. Useful.<br />|⭐⭐⭐⭐|
|`npm run postgres:pgtyped:watch`|Watches your `src/foo/foo.sql` files for changes<br /> and introspects the dockerized database to<br /> generate typesafe queries as<br /> `api/__generated__/foo.queries.ts`.<br /> Requires a terminal session. Super useful.<br />|⭐⭐⭐⭐⭐|
|`npm run postgres:all`|Runs `reset`, `compose`, `serve`, and `watch` all<br /> in sequence. Requires a terminal session. Super useful.<br />|⭐⭐⭐⭐⭐|
|`npm run api:rest:serve`|Runs an express-based API server with the<br /> `typescript-rest` extension.<br /> Requires a terminal session. Super useful.<br />|⭐⭐⭐⭐⭐|
