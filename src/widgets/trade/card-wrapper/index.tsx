import { FC, PropsWithChildren } from "react"

export const CardsContentWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-6 flex flex-col gap-4">{children}</div>
  )
}
