import { FC, PropsWithChildren } from "react"

export const RewardPeriodMenuList:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-6 flex flex-col gap-3">{children}</div>
  )
}
