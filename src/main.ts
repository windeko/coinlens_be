import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestApplicationOptions } from '@nestjs/common';

const appOptions: NestApplicationOptions = { bufferLogs: true };

async function bootstrap() {
  const app = await NestFactory.create(AppModule, appOptions);
  console.log('PORT', process.env.PORT);
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
