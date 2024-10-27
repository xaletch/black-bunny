import { FC, PropsWithChildren } from "react"

export const CustomizationContentWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-7">
      {children}
    </div>
  )
}
