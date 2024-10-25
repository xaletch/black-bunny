import { FC } from "react"
import { ICategoryProps } from "./category.interface"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"

export const TokensCategory: FC<ICategoryProps> = ({ onClick, name, icon }) => {

  return (
    <div className="flex flex-1 h-8 items-center rounded-full bg-secondary-100" onClick={onClick}>
      <div className="w-full pl-2 py-1 pr-[10px] flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="flex w-5 h-5">{icon}</span>
          <p className="text-sm text-white">{name}</p>
        </div>
        <span className="flex rotate-90 d"><ArrowIcon /></span>
      </div>
    </div>
  )
}
