import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CoinsService } from '../coins/coins.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinSchema } from '../coins/coins.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Coins', schema: CoinSchema }]),
  ],
  providers: [CronService, CoinsService],
})
export class CronModule {}
