import { FC } from "react"
import { SettingItemProps } from "./index.interface"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"
import { Link } from "@tanstack/react-router"
import { Radio } from "../radio"

export const SettingItem:FC<SettingItemProps> = ({ children, name, link, isLine, onClick, isChecked, isCheckbox }) => {
  return (
    <Link to={link} className="w-full" onClick={onClick}>
      <div className="flex flex-1 items-center pl-4">
        {children}
        <div className={`flex flex-1 py-[10px] pr-4 justify-between ml-3 ${isLine ? 'border-b-[0.60px] border-b-line' : ''}`}>
          <p className="text-base text-white">{name}</p>
         {isCheckbox ? <Radio selected={isChecked || false} handleClick={() => {}} /> : <span className="flex items-center"><ArrowIcon /></span>}
        </div>
      </div>
    </Link>
  )
}
