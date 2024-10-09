import { FC } from "react"
import { ButtonProps } from "./button.interface"

export const Button: FC<ButtonProps> = ({ text, onClick, color }) => {
  return (
    <button className={`w-full h-11 rounded-full px-5 py-2 
        ${color ? `bg-${color}` : `bg-dark_gray`} flex items-center 
        justify-center font-bold ${color ? `text-[#ffffff]` : `text-black`}`
      }
      onClick={onClick}>
      {text}
    </button>
  )
}
