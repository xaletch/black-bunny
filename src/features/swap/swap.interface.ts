interface Items {
  icon: JSX.Element;
  name: string;
  min_name: string;
  amount: string;
  rate: string;
  value: string;
}
export interface SwapProps {
  items: Items[];
  from: number | null;
  to: number | null;
}