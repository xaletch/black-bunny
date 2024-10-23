export interface SnapItemProp {
  icon: JSX.Element;
  name: string;
  min_name: string;
  amount: string;
  rate: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}