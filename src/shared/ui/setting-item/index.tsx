import { FC } from "react"
import { SettingItemProps } from "./index.interface"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"
import { Link } from "@tanstack/react-router"

export const SettingItem:FC<SettingItemProps> = ({ children, name, link, isLine }) => {
  return (
    <Link to={link} className="w-full">
      <div className="flex flex-1 items-center pl-4">
        {children}
        <div className={`flex flex-1 py-[10px] pr-4 justify-between ml-3 ${isLine ? 'border-b-[0.60px] border-b-line' : ''}`}>
          <p className="text-base text-white">{name}</p>
          <span className="flex items-center"><ArrowIcon /></span>
        </div>
      </div>
    </Link>
  )
}
