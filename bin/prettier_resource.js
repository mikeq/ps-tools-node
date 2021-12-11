#! /usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';

import { prettier } from '../template/prettierrc.js';

console.log(chalk.yellow('Creating Prettier rc file...'));
fs.writeFileSync('.prettierrc', JSON.stringify(prettier, null, 2));
console.log(chalk.green('Prettier rc file created.'));
