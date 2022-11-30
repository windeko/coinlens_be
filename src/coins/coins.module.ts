import { Module } from '@nestjs/common';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
