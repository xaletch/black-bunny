import { FC } from "react"
import { OptionCardProps } from "./option.interface"

export const OptionCard: FC<OptionCardProps> = ({ children, select, onClick, cl, border }) => {
  return (
    <div className={`w-full bg-dark_gray border border-transparent ${select ? '!border-option-border' : ''} ${border ? border : 'rounded-full'}`} onClick={onClick}>
      <div className={`py-3 pl-3 pr-5 flex items-center gap-3 ${cl ? cl : ''}`}>
        {children}
      </div>
    </div>
  )
}
