import { PortfolioIcon } from "@/shared/icons/PortfolioIcon";
import { TransactionSmileIcon } from "@/shared/icons/TransactionSmileIcon";
import { Category } from "@/widgets/category"
import { LoginTitle } from "@/widgets/loginTitle";
import { useState } from "react";

import stake from "@/assets/images/stake.png";
import trade from "@/assets/images/trade.png";
import { CategoryList } from "./list/item";
import { TransactionItem } from "@/shared/ui/transactionItem";


const history = [
  {
    date: "2021-01-01",
    items: [
      {
        icon: trade,
        type: "Trade",
        amount: "+658,866 HACHI",
        fee: "$1",
        currency: "ETH", 
      },
    ]
  },
  {
    date: "2021-01-01",
    items: [
      {
        icon: stake,
        type: "Stake",
        status: "pending",
        hash: "0x235...jing", 
        fee: "$0",
        actions: ["Speed Up", "Cancel"], 
      },
      {
        type: "sent",
        transaction_id: "abc123xyz", 
        amount: "0.5 BTC",
        fee: "Free: 0.0001 BTC",
      },
      {
        icon: stake,
        type: "Stake",
        status: "failed",
        hash: "0x235...jing", 
        fee: "$0",
      },
      {
        icon: trade,
        type: "Trade",
        amount: "+658,866 HACHI",
        fee: "$1",
        currency: "-0 ETH", 
      },
      {
        icon: trade,
        type: "Stake",
        status: "confirmed",
        hash: "0x235...jing", 
        fee: "$0",
      }
    ]
  }
];


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
            />           :
            <CategoryList>
              {history.map((item) => (
                item.items.map((obj, index) => <TransactionItem key={index} {...obj} />)
              ))}
            </CategoryList>
          )
        }
        {
          selectCategory === 'assets' && (
            <LoginTitle
              cl={'mt-8'}
              icon={<TransactionSmileIcon />}
              title={"No Transactions Yet"}
              text={"Make your first purchase and see it here"} 
            />
          )
        }
      </div>
    </div>
  )
}
