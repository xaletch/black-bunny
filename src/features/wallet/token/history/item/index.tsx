import { FC } from "react"
import { TokenHistoryItemProp } from "./index.interface"

export const TokenHistoryItem: FC<TokenHistoryItemProp> = ({ name, date, status, profit, profit_price }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-[3px] h-[42px] rounded-3xl ${status ? 'bg-option-border' : 'bg-confirmed'}`}></div>
      <div className="flex items-center justify-between gap-3 flex-1">
        <div>
          <h4 className="text-sm text-white font-medium">{name}</h4>
          <p className="mt-[2px] text-xs text-swiper-text">{date}</p>
        </div>
        <div>
          {status && <p className="text-sm text-confirmed text-end">{status}</p>}
          {profit && profit_price && (
            <div>
              <h3 className="text-sm text-confirmed">{profit}</h3>
              <p className="mt-[2px] text-xs text-swiper-text text-right">{profit_price}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
