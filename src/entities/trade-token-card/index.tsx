import { FC } from "react"
import { TradeTokenCardProps } from "./card.interface"
import { TokensCardHead } from "../hot-tokens/card/head"

import avatar from "@/assets/images/avatar.png"
import { TokensCardAnalytic } from "../hot-tokens/card/analytic"
import { UploadIcon } from "@/shared/icons/UploadIcon"
import { AnalyticsIcon, ChartIcon } from "@/shared/icons/actions"

export const TradeTokenCard:FC<TradeTokenCardProps> = ({ children }) => {
  return (
    <div className="mt-3 bg-secondary-100 rounded-[20px]">
      <div className="p-4">
        <TokensCardHead avatar={avatar} name={"Pepe"} card_numeric={""} CA={"0x4...B5r9"} P={"0x4...B5r9"} isToken={true} />
        <TokensCardAnalytic discount={"0.0076"} percent={"16,674"} isAnalyticUp={true} isAnalytic={false} />
        {children}
        <div className="flex mt-4 items-center gap-2">
          <button className="w-full flex items-center justify-center h-8 text-sm text-white gap-2">
            <span className="flex icon-16"><ChartIcon /></span>
            Chart
          </button>
          <button className="w-full flex items-center justify-center h-8 text-sm text-white gap-2">
            <span className="flex icon-16"><AnalyticsIcon/></span>
            Analytic
          </button>
          <button className="w-8 h-8 flex items-center justify-center"><UploadIcon /></button>
        </div>
      </div>
    </div>
  )
}
