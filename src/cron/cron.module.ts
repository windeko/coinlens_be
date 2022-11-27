import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CoinsService } from '../coins/coins.service';

@Module({
  providers: [CronService, CoinsService],
})
export class CronModule {}
