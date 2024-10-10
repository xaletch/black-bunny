import { FC } from "react"
import { IDigitDisplay } from "./digitDisplay.interface"

export const DigitDisplay: FC<IDigitDisplay> = ({ size, children }) => {
  return (
    <div className={`grid ${size ? `grid-cols-${size}` : ""} gap-2`}>
      {children}
    </div>
  )
}
