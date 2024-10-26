import { FC, PropsWithChildren } from "react"

export const ProfileBlock:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-secondary-100 rounded-2xl">
      <div className="py-[6px]">
        {children}
      </div>
    </div>
  )
}
