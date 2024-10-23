import { FC } from "react"
import { AccountsItemProps } from "./index.interface"
import { Link } from "@tanstack/react-router"

export const AccountItems: FC<AccountsItemProps> = ({ avatar, name, text, price, amount_icon, amount }) => {
  return (
    <Link to={"/wallet/send/to"} className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full">
          <img className="w-full" src={avatar} alt="name" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-white">{name}</h4>
          <p className="text-xs text-swiper-text">{text}</p>
        </div>
      </div>
      <div>
        <h4 className="text-sm text-white font-medium text-end">${price}</h4>
        <div className="flex items-center gap-1">
          <span className="flex w-4 h-4">{amount_icon}</span>
          <p className="text-xs text-swiper-text">{amount}</p>
        </div>
      </div>
    </Link>
  )
}
