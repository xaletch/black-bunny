import { FC, PropsWithChildren } from "react"

export const HotTokensTemplateButtons: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-2 grid grid-cols-4 gap-2">
      {children}
    </div>
  )
}
