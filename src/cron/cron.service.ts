import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CoinsService } from '../coins/coins.service';

@Injectable()
export class CronService {
  constructor(private readonly CoinsService: CoinsService) {}

  @Cron('0 * * * * *')
  async UpdateCoins(): Promise<void> {
    await this.CoinsService.updateCoins();
  }
}
