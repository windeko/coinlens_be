import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CoingeckoCoinRoiDto } from './dto/CoingeckoCoin.dto';

export type CoinDocument = HydratedDocument<Coin>;

@Schema()
export class Coin {
  @Prop({ required: true })
  symbol: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  current_price: number;

  @Prop({ required: true })
  market_cap: number;

  @Prop({ required: true })
  market_cap_rank: number;

  @Prop()
  fully_diluted_valuation: number;

  @Prop()
  total_volume: number;

  @Prop({ required: true })
  high_24h: number;

  @Prop({ required: true })
  low_24h: number;

  @Prop({ required: true })
  price_change_24h: number;

  @Prop({ required: true })
  price_change_percentage_24h: number;

  @Prop()
  market_cap_change_24h: number;

  @Prop()
  market_cap_change_percentage_24h: number;

  @Prop()
  circulating_supply: number;

  @Prop()
  total_supply: number;

  @Prop()
  max_supply: number;

  @Prop()
  ath: number;

  @Prop()
  ath_change_percentage: number;

  @Prop()
  ath_date: string;

  @Prop()
  atl: number;

  @Prop()
  atl_change_percentage: number;

  @Prop()
  atl_date: string;

  @Prop()
  roi?: CoingeckoCoinRoiDto;

  @Prop({ required: true })
  last_updated: Date;

  @Prop()
  price_change_percentage_1h_in_currency?: number;

  @Prop()
  price_change_percentage_24h_in_currency?: number;

  @Prop()
  price_change_percentage_7d_in_currency?: number;

  @Prop()
  price_change_percentage_30d_in_currency?: number;

  @Prop()
  price_change_percentage_1y_in_currency?: number;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const CoinSchema = SchemaFactory.createForClass(Coin);
