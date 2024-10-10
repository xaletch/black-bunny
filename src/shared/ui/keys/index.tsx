import { FC } from "react"
import { IKeyProps } from "./interface/key.interface"

export const KeyItem: FC<IKeyProps> = ({ keys, onClick, color }) => {
  return (
    <div className={`w-full h-14 rounded-xl flex items-center justify-center ${color === 'default' ? 'bg-dark_gray' : 'text-red_light bg-red_transparent'}`} onClick={onClick}>
      {keys}
    </div>
  )
}
