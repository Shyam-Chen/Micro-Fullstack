const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');
const yargs = require('yargs');

const exec = util.promisify(child_process.exec);

const { argv } = yargs
  .option('install', { alias: 'i', type: 'boolean' })
  .option('serve', { alias: 's', type: 'boolean' });

const apps = fs.readdirSync(path.resolve('./')).filter((app) => app !== 'node_modules');

if (argv.install) {
  console.log('installing...');
  console.log('');

  apps.forEach(async (app) => {
    const { stdout, stderr } = await exec('yarn install', { cwd: path.resolve(app) });

    if (stdout) {
      console.log(`[${app}] `);
      console.log(stdout);
    }

    if (stderr) {
      console.error(`[${app}] `);
      console.error(stderr);
    }
  });
}

if (argv.serve) {
  console.log('serving...');
  console.log('');
}

if (argv.build) {
  console.log('building...');
  console.log('');
}

process.on('unhandledRejection', () => {});
