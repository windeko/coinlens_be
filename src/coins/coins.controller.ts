import { Controller, Get, Query } from '@nestjs/common';
import { Coin } from './coins.schema';
import { CoinsService } from './coins.service';
import { SortOrder } from 'mongoose';

@Controller('coins')
export class CoinsController {
  constructor(private readonly CoinsService: CoinsService) {}

  @Get()
  getCoins(
    @Query('sortBy') sortBy: string,
    @Query('sort') sort: SortOrder,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ): Promise<Coin[]> {
    return this.CoinsService.getCoins(sortBy, sort, limit, page);
  }
}
