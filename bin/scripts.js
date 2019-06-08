#! /usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');

const file = fs.readFileSync('./package.json');
const code = JSON.parse(file.toString());

console.log(chalk.yellow('Adding scripts to package.json...'));
const newScripts = {
  eslint_check:
    'eslint --print-config .eslintrc.json | eslint-config-prettier-check',
  prettier: 'prettier --write *.{js,jsx,json,css,md}',
  lint: 'eslint --color .',
  ...code.scripts,
  test: 'jest',
};

code['lint-staged'] = {
  '*.{js,jsx,json,css,md}': ['prettier --write', 'git add'],
};

code['husky'] = {
  hooks: { 'pre-commit': 'lint-staged' },
};

code.scripts = newScripts;
fs.writeFileSync('./package.json', JSON.stringify(code, null, 2));
console.log(chalk.green('Scripts added to package.json'));
