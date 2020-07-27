import fs from 'fs';
import path from 'path';
import loader from '@assemblyscript/loader';

const wasmFile = fs.readFileSync(path.join(__dirname, '../../../app-assemblies/dist/as-api.wasm'));
const assemblies = loader.instantiateSync(wasmFile, {}).exports;

export default (fastify, opts, next) => {
  fastify.get('/', async () => {
    return { data: 'Hello, World!' };
  });

  fastify.get('/add', async () => {
    return { data: assemblies.add(1, 2) };
  });

  next();
};
