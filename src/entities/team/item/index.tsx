import { FC } from "react"
import { TeamItemProps } from "./index.interface"

export const TeamItem: FC<TeamItemProps> = ({ label, text, onClick, icon }) => {
  return (
    <div className="w-full rounded-2xl bg-secondary-100">
      <div className="p-3 flex items-center justify-between">
        <div>
          <h4 className="text-sm text-white">{label}</h4>
          <p className="mt-1 text-xs text-swiper-text">{text}</p>
        </div>
        <button onClick={onClick} className="flex w2 icon-24">{icon}</button>
      </div>
    </div>
  )
}
