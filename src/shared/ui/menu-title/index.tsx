import { FC } from "react"
import { MenuTitleProps } from "./interface.interface"

export const MenuTitle:FC<MenuTitleProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
    <div className="min-w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-swiper-text">{description}</p>
    </div>
  </div>
  )
}
