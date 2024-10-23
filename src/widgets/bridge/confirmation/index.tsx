import { FC } from "react"
import { BridgeConfirmationProps } from "./index.interface"

export const BridgeConfirmation: FC<BridgeConfirmationProps> = ({ icon, name, amount, rate, value, label }) => {
  return (
    <div className="w-full rounded-2xl border border-key-border">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <span className="w-5 h-5">{icon}</span>
            <p className="text-base font-medium text-wite">{name}</p>
          </div>
          <div className="text-[10px] uppercase text-white">{label}</div>
        </div>
        <div className="mt-[10px]">
          <div className="grid grid-cols-3 gap-2 justify-between">
            <div className="w-full">
              <div className="text-[10px] font-medium text-swiper-text">{"Amount:"}</div>
              <p className={"text-sm text-white"}>{amount}</p>
            </div>
            <div className="w-full">
              <div className="text-[10px] font-medium text-swiper-text">{"Rate:"}</div>
              <p className={"text-sm text-white"}>{rate}</p>
            </div>
            <div className="w-full">
              <div className="text-[10px] font-medium text-swiper-text">{"Value:"}</div>
              <p className={"text-sm text-white"}>{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
