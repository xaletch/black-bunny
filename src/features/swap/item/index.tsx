import { FC } from "react"
import { SnapItemProp } from "./item.interface"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"

export const SnapItem: FC<SnapItemProp> = ({ min_name, icon, amount, value, rate, selected, onClick }) => {
  return (
    <div className="mt-[6px] flex flex-col justify-between h-[77px]">
      <div className="flex justify-between">
        <div className="h-11 px-3 py-[6px] rounded-full bg-secondary-100 flex items-center justify-between gap-2" onClick={onClick}>
          <div className="text-base font-medium text-white flex items-center gap-1">
            {selected && <span className="w-8 h-8">{icon}</span>}
            {selected ? min_name : "Select"}
          </div>
          <span className="rotate-90"><ArrowIcon /></span>
        </div>
        <h3 className="text-2xl text-white">{selected ? amount : 0}</h3>
      </div>
      <div className={`flex ${selected ? 'justify-between' : 'justify-end'}`}>
        {selected && <p className="text-sm text-swiper-text">{rate}</p>}
        <p className="text-sm text-swiper-text text-end">{selected ? value : `$0`}</p>
      </div>
    </div>
  )
}
