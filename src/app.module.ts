import { Module } from '@nestjs/common';
import { CoinsModule } from './coins/coins.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [CoinsModule, ScheduleModule.forRoot(), CronModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
