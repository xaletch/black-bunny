import { FC, PropsWithChildren } from "react"

export const RewardsWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-8">{children}</div>
  )
}
