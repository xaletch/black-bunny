import { ReactNode } from "react"

export const ProfileWrapper = ({ name, children }: { name: string, children: ReactNode }) => {
  return (
    <div>
      <h3 className="text-base text-white font-bold">{name}</h3>
      <div className="mt-3">
        {children}
      </div>
    </div>
  )
}
