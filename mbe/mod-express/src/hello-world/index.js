import fs from 'fs';
import path from 'path';
import { Router } from 'express';
import loader from '@assemblyscript/loader';

const router = Router();

const wasmFile = fs.readFileSync(path.join(__dirname, '../../../app-assemblies/dist/as-api.wasm'));
const assemblies = loader.instantiateSync(wasmFile, {}).exports;

router.get('/', (req, res) => {
  res.json({ data: 'Hello, World!' });
});

router.get('/add', (req, res) => {
  res.json({ data: assemblies.add(1, 2) });
});

export default router;
