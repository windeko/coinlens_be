import { Module } from '@nestjs/common';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinSchema } from './coins.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Coins', schema: CoinSchema }]),
  ],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
