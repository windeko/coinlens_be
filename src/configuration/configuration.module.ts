import { Configuration } from './configuration';
import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

const envFilePath = '.env';

let configuration: Configuration;

const validate = (config: Record<string, unknown>): Record<string, any> => {
  const validatedConfig = plainToClass(Configuration, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
    whitelist: true,
  });

  if (errors.length > 0 && process.env.NODE_ENV !== 'test') {
    throw new Error(errors.toString());
  }

  configuration = validatedConfig;

  return validatedConfig;
};

@Global()
@Module({
  imports: [NestConfigModule.forRoot({ envFilePath, validate })],
  providers: [
    {
      provide: Configuration,
      useFactory: (): Configuration => configuration,
    },
  ],
  exports: [Configuration],
})
export class ConfigurationModule {}
