#! /usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';

import { eslint } from '../template/eslintrc.js';

console.log(chalk.yellow('Creating ESLint rc file...'));
fs.writeFileSync('.eslintrc.json', JSON.stringify(eslint, null, 2));
console.log(chalk.green('ESLint rc file created.'));
