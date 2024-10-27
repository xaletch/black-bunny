import { FC, PropsWithChildren } from "react"

export const CategoryWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full bg-secondary-100 rounded-xl">
      <div className="p-1 flex items-center">{children}</div>
    </div>
  )
}
