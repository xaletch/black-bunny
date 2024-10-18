export interface TransactionItemProps {
  currency_icon?:JSX.Element;
  icon?: string;
  type: string;
  status?: string;
  hash?: string;
  fee: string;
  actions?: string[];
  amount?: string;
  currency?: string;
  transaction_id?: string;
  id: string
}