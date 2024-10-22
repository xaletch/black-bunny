interface Items {
  icon: string | JSX.Element,
  name: string,
  description?: string,
  status?: string,
}
export interface ImportWalletItems {
  items: Items[];
  nextStep: () => void;
}