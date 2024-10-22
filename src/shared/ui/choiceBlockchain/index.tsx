import { FC } from "react"
import { ChoiceProps } from "./choice.interface"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"

export const ChoiceBlockchain: FC<ChoiceProps> = ({ select, open, icon }) => {
  return (
    <div className="bg-secondary-100 rounded-full" onClick={open}>
      <div className="px-2 py-1 h-32px flex items-center justify-between gap-2">
        {icon && <div className="w-5 h-5">{icon}</div>}
        <p className="text-sm text-white">{select}</p>
        <span className="flex w-4 h-4 arrow"><ArrowIcon/></span>
      </div>
    </div>
  )
}
