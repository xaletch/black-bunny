import { TankIcon } from "@/shared/icons/TankIcon"
import { TokenHistoryItem } from "./item"

export const TokenHistory = () => {

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between pb-2 border-b border-b-secondary-100">
        <h3 className="text-xl text-white font-bold">History</h3>
        <div className="flex items-center gap-[6px]">
          <span className="flex w2"><TankIcon /></span>
          <div className="flex text-swiper-text text-xs">
          Total: <p className="text-white">{'0.00000036 ETH'}</p> <span className="text-green">{'($0.09)'}</span> 
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-5">
          <TokenHistoryItem name={"Approve"} date={"June 25, 11:09"} status={"Confirmed"} />
          <TokenHistoryItem name={"Buy: $0.064735"} date={"June 24, 12:45"} profit={"+16,678,585.90 BASE"} profit_price={"$79.09"} />
        </div>
      </div>
    </div>
  )
}
