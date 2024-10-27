import { FC } from "react"
import { TradeCardProps } from "./trade-card.interface"
import { DotsIcon } from "@/shared/icons/DotsIcon"
import { CopyIcon } from "@/shared/icons/CopyIcon"
import { Button } from "@/shared/ui/buttons"
import CopyText from "@/shared/utils/copyText"

export const TradeCard:FC<TradeCardProps> = ({ icon, name, amount, profit, ca, orders, free, handleTrade, onActions }) => {
  return (
    <div className="rounded-[20px] bg-secondary-100">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">{icon}</div>
            <div>
              <h3 className="text-sm font-bold text-white">{name}</h3>
              <div className="text-xs text-white flex items-center gap-1">
                CA: <span className="text-swiper-text">{ca}</span>
                <button className="flex" onClick={() => CopyText(ca)}><CopyIcon/></button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-base font-bold">${amount}</p>
            <p className="text-xs text-green text-end">{profit}$</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-secondary-100">
            <div className="py-2 px-3">
              <span className="text-[10px] text-swiper-text font-medium">Active Orders</span>
              <p className="text-white mt-1 text-base">{orders}</p>
            </div>
          </div>
          <div className="rounded-lg bg-secondary-100">
            <div className="py-2 px-3">
              <span className="text-[10px] text-swiper-text font-medium">Free</span>
              <p className="text-white mt-1 text-base">{free}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button className="w2 icon-20" onClick={onActions}><DotsIcon/></button>
          <Button text={"Trade"} onClick={handleTrade} color={"bg-button"} cl={"font-medium h-8"} />
        </div>
      </div>
    </div>
  )
}
