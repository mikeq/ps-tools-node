#! /usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');

yargs
  .usage('Usage: $0 <command> [options]')
  .command('init', 'Initialise the NodeJS tooling', () => {
    console.log(chalk.blue.bold('Setting up the NodeJS tools'));
    require('./scripts');
    require('./prettier_resource');
    require('./linter');
    console.log(chalk.blue.bold('Install complete'));
  })
  .demand(1, 'must provide a valid command')
  .help('h')
  .alias('h', 'help').argv;
