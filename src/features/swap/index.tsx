import { FC } from "react"
import { SnapItem } from "./item"
import { ArrowsIcon } from "@/shared/icons/ArrowsIcon";
import { SwapProps } from "./swap.interface";

export const Swap: FC<SwapProps> = ({ items, from, to, selectionFrom, selectTo }) => {

  return (
    <div className="w-full rounded-[20px] bg-secondary-100">
      <div className="p-5">
        <div>
          <div className="text-xs text-swiper-text">From</div>
          <SnapItem {...items[from || 0]} selected={from !== null} onClick={selectionFrom} />
        </div>
        <div className="w-full h-[1px] bg-dot flex items-center justify-center my-5">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-100 bg-f"><ArrowsIcon /></div>
        </div>
        <div>
          <div className="text-xs text-swiper-text">To</div>
          <SnapItem {...items[to || 0]} selected={to !== null} onClick={selectTo} />
        </div>
      </div>
    </div>
  )
}
