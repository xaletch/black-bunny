import { TankIcon } from "@/shared/icons/TankIcon"

export const TradeBalance = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xs text-swiper-text">Balance: <span className="text-white">0.0993 ETH ($321.22)</span></p>
      <div className="flex items-center gap-1" onClick={onClick}>
        <span className="flex"><TankIcon/></span>
        <p className="text-xs text-white">8 GWEI</p>
      </div>
    </div>
  )
}
