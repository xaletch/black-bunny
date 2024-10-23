interface Items {
  icon: string | JSX.Element;
  name: string;
  second_name: string;
  amount: string;
  price: string;
}

export interface SelectCryptoProps {
  crypto: Items[]
}