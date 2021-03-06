#!/usr/bin/env node
'use strict';

const CLI = require('./lib/cli');

const command = new CLI({
  argv: process.argv.slice(2),
  stderr: process.stderr,
  stdin: process.stdin,
  stdout: process.stdout
});

command.run(function(error) {
  if (!error) { return; }
  console.error(error.message);
  process.exit(1);
});
