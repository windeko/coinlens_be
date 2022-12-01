import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CoingeckoCoinDto } from './dto/CoingeckoCoin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CoinDocument } from './coins.schema';
import { Model } from 'mongoose';

@Injectable()
export class CoinsService {
  constructor(
    private readonly axios: HttpService,
    @InjectModel('Coins') private readonly coinModel: Model<CoinDocument>,
  ) {}

  public async updateCoins(): Promise<void> {
    const { data: coins } = await this.axios.axiosRef.get<CoingeckoCoinDto[]>(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          price_change_percentage: '1h,24h,7d,30d,1y',
          per_page: 250,
        },
      },
    );

    coins.forEach(async (coin) => {
      await this.coinModel.findOneAndUpdate({ symbol: coin.symbol }, coin, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });
    });

    console.log('updateCoins', coins);
  }
}
