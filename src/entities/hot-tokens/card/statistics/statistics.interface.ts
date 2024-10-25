interface TaxItem {
  one: string;
  two: string;
}

export interface StatisticsInfo {
  liquidity: string;
  volume: string;
  mcap: string;
  age: string;
  holders: string;
  tax: TaxItem;
}

export interface StatisticsProps {
  info: StatisticsInfo;
}