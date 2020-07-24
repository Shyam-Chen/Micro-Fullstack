import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3003, () => {
    console.log('🚀  App: Bootstrap Succeeded');
    console.log(`🚀  Host: http://${'localhost'}:${'3003'}`);
  });
}

bootstrap();
