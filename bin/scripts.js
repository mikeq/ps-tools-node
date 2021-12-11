#! /usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';

const file = fs.readFileSync('./package.json');
const code = JSON.parse(file.toString());

console.info(chalk.yellow('Adding scripts to package.json...'));
const newScripts = {
  eslint_check:
    'eslint --print-config .eslintrc.json | eslint-config-prettier-check',
  prettier: 'prettier --write *.{js,jsx,json,css,md}',
  lint: 'eslint --color .',
  ...code.scripts,
  test: 'jest',
  postinstall: 'husky install',
};

code['lint-staged'] = {
  '*.{js,jsx,json,css,md}': ['prettier --write', 'git add'],
};

code['husky'] = {
  hooks: { 'pre-commit': 'lint-staged' },
};

code.scripts = newScripts;
fs.writeFileSync('./package.json', JSON.stringify(code, null, 2));
console.info(chalk.green('Scripts added to package.json'));
