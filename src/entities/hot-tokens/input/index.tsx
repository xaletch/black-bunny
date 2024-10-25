import { FC } from "react"
import { HotTokenInputProps } from "./input.interface"

export const HotTokensInput:FC<HotTokenInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full h-14">
      <input 
        className="w-full h-full px-[14px] py-4 flex items-center rounded-2xl bg-secondary-100 placeholder:[#969696] text-white text-sm" 
        type="number" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}
      />
    </div>
  )
}
