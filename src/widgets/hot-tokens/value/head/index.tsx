import { SlippageIcon } from "@/shared/icons/SlippageIcon"
import { TankIcon } from "@/shared/icons/TankIcon"

export const HotTokensValueHeader = ({ setIsGas, setIsSettings }: { setIsGas: () => void, setIsSettings: () => void }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-base text-white font-bold">Value</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1" onClick={setIsGas}>
          <span className="flex w2"><TankIcon /></span>
          <p className="text-xs text-white">8 GWEI</p>
        </div>
        <div className="w-[1px] h-3 bg-line"></div>
        <div className="flex items-center gap-1" onClick={setIsSettings}>
          <span className="flex w2"><SlippageIcon /></span>
          <p className="text-xs text-white">Slippage 5%</p>
        </div>
      </div>
    </div>
  )
}
