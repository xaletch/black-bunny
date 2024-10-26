import { FC } from "react"
import { SettingIconProps } from "./icon.interface"

export const SettingIcon:FC<SettingIconProps> = ({ icon, color }) => {
  return (
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center`} style={{ background: `#${color}` }}>{icon}</div>
  )
}
