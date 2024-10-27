import { FC } from "react"
import { CustomizationListProps } from "./list.interface"
import { ProfileTitle } from "@/shared/ui/profile-title"

export const CustomizationList:FC<CustomizationListProps> = ({ children, title, text }) => {
  return (
    <div>
      <ProfileTitle title={title} cl={'pr-7'}>
        {text}
      </ProfileTitle>
      <div className="mt-3">{children}</div>
    </div>
  )
}
