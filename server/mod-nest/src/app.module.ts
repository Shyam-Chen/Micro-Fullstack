import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [HelloWorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
