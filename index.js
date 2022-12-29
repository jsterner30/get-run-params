#! /usr/bin/env node

import { Command } from 'commander'
import get from './commands/get'
import set from './commands/set'
const program = new Command()

program
    .command('get')
    .description('Get AWS Params')
    .action(get)

program
    .command('set')
    .description('Set a config option')
    .action(set)

program.version(await getTFVMVersion(), '-v, --version', 'Output the current version')

program.parse()