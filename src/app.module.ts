import { Module } from '@nestjs/common';
import { CoinsModule } from './coins/coins.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot('mongodb://mongodb:27017/coinlense'),
    ScheduleModule.forRoot(),
    CoinsModule,
    CronModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
