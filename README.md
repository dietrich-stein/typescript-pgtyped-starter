# Typescript Starter

## Overview

This is a standalone starter project that you can customize to your liking right out of the box. Here is a bullet list showing some of the more notable things going on:

- TypeScript
- Sass/SCSS
- Babel
- Webpack

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







