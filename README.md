# Javascript tooling

## Which Version?

if using Node < 15 then use version `@1.0.9`, for Node >= 15.0.0 use version `@2.0.0`

## Install as development dependency

```
C:\Users\123456\projects
λ cd myproject
C:\Users\123456\projects\myproject
λ git init
λ yarn add -D @oakheart/ps-tools-node@2.0.0
```

## Display Help

```
C:\Users\123456\projects\myproject
λ node_modules\.bin\ps-tools-node -h
Usage: ps-tools-node.js <command> [options]

Commands:
  ps-tools-node.js init  Initialise the javascript tooling

Options:
  --version    Show version number
  -h, --help   Show help
```

## Initialise tooling

```
C:\Users\123456\projects\myproject
λ node_modules\.bin\ps-tools-node init
```

### What it does

This script sets up your project environment with everything required for linting, formatting and testing of your Javascript project (NodeJS).

It will install these npm packages

- eslint
- prettier
- jest
- eslint-config-prettier
- eslint-plugin-prettier
- husky
- lint-staged

The following resource files are created in the root of your project `.eslintrc.json` and `.prettierrc`, these define the rules for linting and formatting.

The following are added to your package.json file

```
...
  "scripts": {
    "precommit": "lint-staged",
    "eslint_check": "eslint --print-config .eslintrc.json | eslint-config-prettier-check",
    "prettier": "prettier --write *.{js,jsx,json,css,md}",
    "lint": "eslint --color .",
    "test": "jest"
    ...
  }
...
```

and

```
...
  "lint-staged": {
    "*.{js,jsx,json,css,md}": [
      "prettier --write",
      "git add"
    ]
  }
...
```

### What it doesn't do

This script will not configure your editor plugins.
