import { FC, PropsWithChildren } from "react"

export const HotTokensValue:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  )
}
