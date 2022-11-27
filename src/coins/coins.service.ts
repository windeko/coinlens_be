import { Injectable } from '@nestjs/common';

@Injectable()
export class CoinsService {
  public async updateCoins(): Promise<void> {
    console.log('updateCoins');
  }
}
