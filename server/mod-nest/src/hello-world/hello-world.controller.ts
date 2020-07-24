import fs from 'fs';
import path from 'path';
import { Controller, Get } from '@nestjs/common';
import loader from '@assemblyscript/loader';

import { HelloWorldService } from './hello-world.service';

const wasmFile = fs.readFileSync(path.join(__dirname, '../../../app-assemblies/dist/as-api.wasm'));
const assemblies: any = loader.instantiateSync(wasmFile, {}).exports;

@Controller('hello-world')
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Get()
  getHello(): string {
    return this.helloWorldService.getHello();
  }

  @Get('add')
  add(): any {
    return assemblies.add(1, 2);
  }
}
