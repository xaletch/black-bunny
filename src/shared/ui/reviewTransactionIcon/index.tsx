import { FC } from "react"
import { ReviewTransactionProps } from "./index.interface"

export const ReviewTransactionItem: FC<ReviewTransactionProps> = ({ avatar, name, hash, type, amount, amount_icon, value }) => {
  return (
    <div className="w-full bg-secondary-100 rounded-2xl">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
            <div>
              <h3 className="text-sm font-medium text-white">{name}</h3>
              <p className="text-xs text-swiper-text">{hash}</p>
            </div>
          </div>
          <p className="uppercase text-[10px] font-medium text-white">{type}</p>
        </div>
        <div className="mt-3 grid grid-cols-2 justify-between">
          <div>
            <p className="text-[10px] font-medium text-white">Amount:</p>
            <div className="flex items-center gap-1">
              <span className="flex w-5 h-5">{amount_icon}</span>
              <p className="text-sm text-white">{amount}</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-medium text-white">Value: </p>
            <div className="flex items-center gap-1">
              <p className="text-sm text-white">${value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
