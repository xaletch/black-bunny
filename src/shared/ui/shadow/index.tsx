import { PropsWithClass } from "@/app/types"
import { FC } from "react"

export const Shadow: FC<PropsWithClass> = ({ cl }) => {
  return (
    <div className={`absolute left-2/4 -top-24 -translate-x-2/4 w-32 h-32 rounded-full blur-[140px] ${cl}`}></div>
  )
}
