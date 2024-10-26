import { FC } from "react"
import { BonusItems } from "../menu.interface"

export const BonusCard:FC<BonusItems> = ({ invited_you, invited_team, bonus }) => {
  return (
    <div className="w-full rounded-2xl bg-secondary-100 mt-3">
      <div className="p-4">
        <h5 className="text-white font-bold text-base">Referral Bonus</h5>
        <div className="">
          <p className="text-sm text-swiper-text mt-1">Invited by you: <span>{invited_you}%</span></p>
          <p className="text-sm text-swiper-text mt-1">Invited by your team: <span>{invited_team}%</span></p>
          <p className="text-sm text-swiper-text mt-1">Total bonus: <span className="font-bold text-green">{bonus}%</span></p>
        </div>
      </div>
    </div>
  )
}
