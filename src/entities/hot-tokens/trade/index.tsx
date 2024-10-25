import { BuyIcon } from "@/shared/icons/BuyIcon"
import { SellIcon } from "@/shared/icons/SellIcon"

const trade = [
  {
    name: "Buy",
    icon: <BuyIcon/>
  },
  {
    name: "Sell",
    icon: <SellIcon/>
  }
]

export const HotTokensTrade = ({ select, onClick }: { select: number, onClick: (i: number) => void; }) => {
  return (
    <div className="w-full h-[54px] bg-secondary-100 rounded-full">
      <div className="p-[6px] h-full flex">
        {trade.map((item, index) => (
          <div className={`w-full p-[6px] flex items-center justify-center gap-2 rounded-full ${select === index ? 'bg-category-bg shadow-md' : ''}`} key={index} onClick={() => onClick(index)}>
            <span className="flex">{item.icon}</span>
            <p className="text-xl font-bold text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
