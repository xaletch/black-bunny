import { FC } from "react"
import { IManyShadow } from "./shadow.interface"

export const ShadowMany: FC<IManyShadow> = ({ cl, bg_one, bg_two }) => {
  return (
    <div className={`${cl && cl} flex justify-between absolute left-0 right-0 -top-0`}>
      <div className={` w-32 h-32 rounded-full blur-[140px] ${bg_one}`}></div>
      <div className={` w-32 h-32 rounded-full blur-[140px] ${bg_two}`}></div>
    </div>
  )
}
