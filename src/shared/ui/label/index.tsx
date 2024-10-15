import { FC } from "react"
import { ITextLabelProp } from "./textLabel.interface"

export const TextLabel:FC<ITextLabelProp> = ({ title, text, cl }) => {
  return (
    <div className={cl && cl}>
      <h3 className="text-base text-white font-medium">{title}</h3>
      {text && <p className="mt-[2px] text-swiper-text text-sm">{text}</p>}
    </div>
  )
}
