import { FC, PropsWithChildren } from "react"

export const TradeSearchSortWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center gap-2">{children}</div>
  )
}
