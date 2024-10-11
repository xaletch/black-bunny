import { FC, PropsWithChildren } from "react"

export const PhrasesList: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className="grid grid-cols-2 gap-2">
      {children}
    </div>
  )
}
