import { StatisticsInfo } from "./statistics/statistics.interface";

export interface TokenCardProps {
  avatar: string;
  card_numeric: string;
  name: string;
  CA: string;
  P: string;
  discount: string;
  percent: string;
  isAnalyticUp: boolean;
  info: StatisticsInfo;
  handleTrade: () => void;
}