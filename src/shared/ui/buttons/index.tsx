import { FC } from "react"
import { ButtonProps } from "./button.interface"

export const Button: FC<ButtonProps> = ({ text, onClick, color, icon }) => {
  return (
    <button className={`w-full h-11 rounded-full px-5 py-2 gap-2
        ${color ? `${color}` : `bg-dark_gray`} flex items-center 
        justify-center font-bold ${color ? `text-[#ffffff]` : `text-text`}`
      }
      onClick={onClick}>
      {icon && <span className="flex">{icon}</span>}
      {text}
    </button>
  )
}
