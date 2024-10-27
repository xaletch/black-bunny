export interface TradeCardProps {
  icon: string | JSX.Element;
  name: string;
  amount: string;
  profit: string;
  ca: string;
  orders: string;
  free: string;
  handleTrade: () => void;
  onActions: () => void;
}