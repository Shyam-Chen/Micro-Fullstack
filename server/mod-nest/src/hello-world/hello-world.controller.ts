import { Controller, Get } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

// import assemblies from '../../../app-assemblies';
const assemblies = require('../../../app-assemblies');

@Controller('hello-world')
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Get()
  getHello(): string {
    return this.helloWorldService.getHello();
  }

  @Get('add')
  add(): any {
    return assemblies.add(1, 22);
  }
}
