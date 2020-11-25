const fs = require('fs');
const path = require('path');
const loader = require('@assemblyscript/loader');

module.exports = loader.instantiateSync(
  fs.readFileSync(path.join(__dirname + './dist/as-api.wasm')),
  {},
).exports;
