import { FC } from "react"
import { RewardSortProps } from "./sort.interface"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"

export const RewardSort:FC<RewardSortProps> = ({ select, onClick }) => {
  return (
    <div className="rounded-full bg-secondary-100" onClick={onClick}>
      <div className="px-3 py-1 flex items-center justify-center gap-2">
        <p className="text-sm text-white">{select}</p>
        <span className="flex rotate-90 w2 icon-16"><ArrowIcon/></span>
      </div>
    </div>
  )
}
