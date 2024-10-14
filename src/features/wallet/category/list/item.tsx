import { FC, PropsWithChildren } from "react"

export const CategoryList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  )
}
