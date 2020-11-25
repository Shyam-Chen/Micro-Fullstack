import { Module } from '@nestjs/common';

import { HelloWorldModule } from '~/hello-world/hello-world.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HelloWorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
