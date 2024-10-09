import { FC } from "react"
import { IKeyProps } from "./interface/key.interface"

export const KeyItem: FC<IKeyProps> = ({ key, onClick, color }) => {
  return (
    <div className={`w-full rounded-xl flex items-center justify-center text-${color}`} onClick={onClick}>
      {key}
    </div>
  )
}
