import { FC } from "react"
import { InputProps } from "./input.interface"

export const Input: FC<InputProps> = ({ value, onChange, placeholder, type, cl, icon }) => {
  return (
    <div className="relative">
      <input
        className={`w-full h-11 px-3 py-[10px] rounded-xl bg-dark_gray ${cl && cl}`} 
        type={type} 
        value={value}
        placeholder={placeholder} 
        onChange={(e) => onChange(e.target.value)}
      />
      {icon && <button className="flex absolute right-3 top-2/4 transform w2">{icon}</button>}
    </div>
  )
}
