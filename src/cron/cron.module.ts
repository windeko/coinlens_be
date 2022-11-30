import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CoinsService } from '../coins/coins.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CronService, CoinsService],
})
export class CronModule {}
