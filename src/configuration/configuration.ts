import { IsBoolean, IsNumber, IsString } from 'class-validator';

export enum Environment {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}

export class Configuration {
  @IsString()
  public NODE_ENV: Environment;

  @IsNumber()
  public PORT: number;

  @IsString()
  public API_KEY: string;

  @IsString()
  public DB_USERNAME: string;

  @IsString()
  public DB_PASSWORD: string;

  @IsString()
  public DB_NAME: string;

  @IsString()
  public DB_HOST: string;

  @IsNumber()
  public DB_PORT: number;

  @IsBoolean()
  public DB_LOGGING: boolean;

  @IsString()
  public REDIS_HOST: string;

  @IsString()
  public REDIS_PORT: string;
}
