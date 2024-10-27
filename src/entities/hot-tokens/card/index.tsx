import { Button } from "@/shared/ui/buttons"
import { TokensCardAnalytic } from "./analytic"
import { TokensCardHead } from "./head"
import { TokensCardStatistics } from "./statistics"
import { FC } from "react"
import { TokenCardProps } from "./card.interface"
import { UploadIcon } from "@/shared/icons/UploadIcon"

export const TokensCard: FC<TokenCardProps> = ({ avatar, card_numeric, name, CA, P, discount, percent, isAnalyticUp, info, handleTrade }) => {
  return (
    <div className="bg-card rounded-[20px]">
      <div className="p-4 flex flex-col">
        <TokensCardHead avatar={avatar} card_numeric={card_numeric} name={name} CA={CA} P={P} />
        <TokensCardAnalytic discount={discount} percent={percent} isAnalyticUp={isAnalyticUp} isAnalytic={true} />
        <TokensCardStatistics liquidity={info.liquidity} volume={info.volume} mcap={info.mcap} age={info.age} holders={info.holders} tax={info.tax} />
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1">
            <Button text={"Trade"} onClick={handleTrade} color={"bg-button"} cl={"h-8 font-medium text-sm"} />
          </div>
          <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center d"><UploadIcon /></div>
        </div>
      </div>
    </div>
  )
}
