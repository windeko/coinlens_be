import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CoingeckoCoinDto } from './dto/CoingeckoCoin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CoinDocument } from './coins.schema';
import { Model, SortOrder } from 'mongoose';

@Injectable()
export class CoinsService {
  constructor(
    private readonly axios: HttpService,
    @InjectModel('Coins') private readonly coinModel: Model<CoinDocument>,
  ) {}

  public async updateCoins(): Promise<void> {
    const perPage = 250;
    let coinsLength = 0;
    let page = 1;
    do {
      const { data: coins } = await this.axios.axiosRef.get<CoingeckoCoinDto[]>(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            price_change_percentage: '1h,24h,7d,30d,1y',
            per_page: perPage,
            page,
          },
        },
      );
      coinsLength = coins.length;

      coins.forEach(async (coin) => {
        await this.coinModel.findOneAndUpdate({ symbol: coin.symbol }, coin, {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        });
      });

      page++;
      console.log(`Updated ${coinsLength} coins`);
    } while (coinsLength === perPage && page < 5);
  }

  public async getCoins(
    sortBy = 'market_cap_rank',
    sort: SortOrder = 'asc',
    limit = 100,
    page = 0,
  ): Promise<CoinDocument[]> {
    return this.coinModel
      .find()
      .sort([[sortBy, sort]])
      .skip(limit * page)
      .limit(limit)
      .exec();
  }
}
