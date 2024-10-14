import { FC } from "react"
import { OptionCardProps } from "./option.interface"

export const OptionCard: FC<OptionCardProps> = ({ children, select, onClick }) => {
  return (
    <div className={`w-full bg-dark_gray rounded-full border border-transparent ${select ? '!border-option-border' : ''}`} onClick={onClick}>
      <div className="py-3 pl-3 pr-5 flex items-center gap-3">
        {children}
      </div>
    </div>
  )
}
