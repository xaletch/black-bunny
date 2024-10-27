import { FC, PropsWithChildren } from "react"

export const CustomizationCategoryWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-3 grid grid-cols-4 gap-2">{children}</div>
  )
}
