import { InfoIcon } from "@/shared/icons/InfoIcon"
import { GoldIcon } from "@/shared/icons/leagues/GoldIcon"

export const CurrentLeagues = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex justify-between">
    <div className="flex items-center gap-4" onClick={onClick}>
      <div className="w-[60px] h-[60px]">
        <GoldIcon />
      </div>
      <div>
        <p className="text-base text-white">Gold League</p>
        <h2 className="font-bold text-xl text-white">$900</h2>
      </div>
    </div>
    <button className="flex"><InfoIcon /></button>
  </div>
  )
}
