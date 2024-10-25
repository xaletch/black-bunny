import { FC } from "react"
import { CardAnalyticProps } from "./analytic.interface"
import { AnalyticIcon } from "@/shared/icons/AnalyticIcon"

export const TokensCardAnalytic: FC<CardAnalyticProps> = ({ discount, percent, isAnalyticUp }) => {
  return (
    <div className="w-full bg-secondary-100 rounded-lg mt-4">
      <div className="px-3 py-[7px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-xl text-white">${discount}</h3>
          <div className="flex items-center gap-1">
            <span className={`flex ${isAnalyticUp ? '' : 'failed-svg rotate-90'}`}><AnalyticIcon /></span>
            <p className={`text-xs ${isAnalyticUp ? 'text-green' : 'text-failed'}`}>{percent}%</p>
          </div>
        </div>
        <div className="text-xs text-button font-bold">Analytic</div>
      </div>
    </div>
  )
}
