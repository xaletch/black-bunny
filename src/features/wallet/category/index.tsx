import { PortfolioIcon } from "@/shared/icons/PortfolioIcon";
import { TransactionSmileIcon } from "@/shared/icons/TransactionSmileIcon";
import { Category } from "@/widgets/category"
import { LoginTitle } from "@/widgets/loginTitle";
import { useState } from "react";

import stake from "@/assets/images/stake.png";
import trade from "@/assets/images/trade.png";
import { CategoryList } from "./list/item";
import { TransactionItem } from "@/shared/ui/transactionItem";
import { EthereumIcon } from "@/shared/icons/EthereumIcon";
import { BTCIcon } from "@/shared/icons/BTCIcon";

const history = [
  {
    date: "",
    items: [
      {
        id: "3843",
        icon: trade,
        type: "Trade",
        amount: "+658,866 HACHI",
        fee: "$1",
        currency: "ETH", 
      },
    ]
  },
  {
    date: "8.8.2024",
    items: [
      {
        id: "1234",
        icon: stake,
        type: "Stake",
        status: "pending",
        hash: "0x235...jing", 
        fee: "$0",
        actions: ["Speed Up", "Cancel"], 
      },
      {
        id: "8473",
        type: "sent",
        transaction_id: "abc123xyz", 
        amount: "0.5 BTC",
        fee: "Free: 0.0001 BTC",
      },
      {
        id: "9238",
        icon: stake,
        type: "Stake",
        status: "failed",
        hash: "0x235...jing", 
        fee: "$0",
      },
      {
        id: "3623",
        icon: trade,
        type: "Trade",
        amount: "+658,866 HACHI",
        fee: "$1",
        currency: "-0 ETH", 
      },
      {
        id: "2343",
        icon: trade,
        type: "Stake",
        status: "confirmed",
        hash: "0x235...jing", 
        fee: "$0",
      }
    ]
  }
];

const assets = [
  {
    id: "5432",
    currency_icon: <EthereumIcon />,
    type: "Ethereum",
    amount: "$120.45",
    fee: "+5.34$ (1.35%)",
    currency: "0.0003431 ETH", 
  },
  {
    id: "6453",
    currency_icon: <BTCIcon />,
    type: "Bitcoin",
    amount: "$230.53",
    fee: "-2.45$ (5.46%)",
    currency: "0.0003431  BTC", 
  }
]


export const WalletCategory = () => {
  const [selectCategory, setSelectCategory] = useState('history');

  return (
    <div className="mt-6">
      <Category category={['history', 'assets']} select={selectCategory} setSelect={setSelectCategory} />
      <div className="mt-4">
        {
          selectCategory === 'history' &&
          (history.length < 0 ? 
            <LoginTitle
            cl={'mt-8'}
            icon={<PortfolioIcon />}
            title={"Your Portfolio is Empty"}
            text={"Start tracking your investments here"}
            />
          :
            <CategoryList>
              {history.map((item, index) => (
                <div key={index}>
                  <p className="text-xs text-[#969696]">{item.date}</p>
                  <div className="flex flex-col gap-6 pt-3">
                    {item.items.map((obj, index) => <TransactionItem key={index} {...obj} />)}
                  </div>
                </div>
              ))}
            </CategoryList>
          )
        }
        {
          selectCategory === 'assets' && (
            assets.length < 0 ?
              <LoginTitle
                cl={'mt-8'}
                icon={<TransactionSmileIcon />}
                title={"No Transactions Yet"}
                text={"Make your first purchase and see it here"} 
              />
            : 
              <CategoryList>
                {assets.map((obj, index) => <TransactionItem key={index} {...obj}/>)}
              </CategoryList>
          )
        }
      </div>
    </div>
  )
}
