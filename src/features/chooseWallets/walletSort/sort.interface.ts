interface Items {
  name: string;
  icon?: string | JSX.Element;
}
export interface WalletSortItem {
  items: Items[];
  select: string;
  handleSelect: (item: string) => void;
}
