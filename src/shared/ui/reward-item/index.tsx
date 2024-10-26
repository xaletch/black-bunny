import { FC } from "react"
import { RewardItemProps } from "./item.interface"

export const RewardItem: FC<RewardItemProps> = ({ count_users, text, bonus, price }) => {
  return (
    <div className="w-full h-[66px] bg-secondary-100 rounded-2xl">
      <div className="py-3 pl-3 h-full pr-4 flex justify-between items-center">
        <div className="">
          <h5 className="text-sm text-white">{count_users} Users</h5>
          <p className="text-xs text-swiper-text mt-1">{text} <span className="text-green">{bonus}</span></p>
        </div>
        <div className="font-bold text-base text-white">${price}</div>
      </div>
    </div>
  )
}
