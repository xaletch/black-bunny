import { FC } from "react"
import { StatisticsInfo } from "./statistics.interface"

export const TokensCardStatistics: FC<StatisticsInfo> = ({ liquidity, volume, mcap, age, holders, tax }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-2">
      <div className="w-full bg-secondary-100 rounded-lg">
        <div className="px-3 py-2">
          <span className="text-[10px] font-medium text-[#969696]">Liquidity</span>
          <p className="text-base text-white mt-1">${liquidity}</p>
        </div>
      </div>
      <div className="w-full bg-secondary-100 rounded-lg">
        <div className="px-3 py-2">
          <span className="text-[10px] font-medium text-[#969696]">Liquidity</span>
          <p className="text-base text-white mt-1">${volume}</p>
        </div>
      </div>
      <div className="w-full bg-secondary-100 rounded-lg">
        <div className="px-3 py-2">
          <span className="text-[10px] font-medium text-[#969696]">Liquidity</span>
          <p className="text-base text-white mt-1">${mcap}</p>
        </div>
      </div>
      <div className="w-full bg-secondary-100 rounded-lg">
        <div className="px-3 py-2">
          <span className="text-[10px] font-medium text-[#969696]">Liquidity</span>
          <p className="text-base text-white mt-1">{age}</p>
        </div>
      </div>
      <div className="w-full bg-secondary-100 rounded-lg">
        <div className="px-3 py-2">
          <span className="text-[10px] font-medium text-[#969696]">Liquidity</span>
          <p className="text-base text-white mt-1">{holders}</p>
        </div>
      </div>
      <div className="w-full bg-secondary-100 rounded-lg">
        <div className="px-3 py-2">
          <span className="text-[10px] font-medium text-[#969696]">Liquidity</span>
          <p className="flex items-center gap-1">
            <span className="text-base text-green">{tax.one}%</span>
            <span className="text-base text-failed">{tax.two}%</span>
          </p>
        </div>
      </div>
    </div>
  )
}
