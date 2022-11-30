import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CoingeckoCoinDto } from "./dto/CoingeckoCoin.dto";

@Injectable()
export class CoinsService {
  constructor(private readonly axios: HttpService) {}

  public async updateCoins(): Promise<void> {
    const { data: coins } = await this.axios.axiosRef.get<CoingeckoCoinDto>(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
        },
      },
    );
    console.log('updateCoins', coins);
  }
}
