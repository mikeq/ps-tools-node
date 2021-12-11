#! /usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';

import { eslint } from '../template/eslintrc.js';

console.info(chalk.yellow('Creating ESLint rc file...'));
fs.writeFileSync('.eslintrc.json', JSON.stringify(eslint, null, 2));
console.info(chalk.green('ESLint rc file created.'));
