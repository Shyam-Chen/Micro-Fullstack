import fs from 'fs';
import path from 'path';
import Router from '@koa/router';
import loader from '@assemblyscript/loader';

const router = new Router();

const wasmFile = fs.readFileSync(path.join(__dirname, '../../../app-assemblies/dist/as-api.wasm'));
const assemblies = loader.instantiateSync(wasmFile, {}).exports;

router.get('/', async (ctx) => {
  ctx.body = { data: 'Hello, World!' };
});

router.get('/add', async (ctx) => {
  ctx.body = { data: assemblies.add(1, 2) };
});

export default router;
