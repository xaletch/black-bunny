import { FC, PropsWithChildren } from "react"

export const RewardsSortWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xl text-bold text-white">Rewards</h3>
        <p className="text-sm text-swiper-text">Follow your progress and your friends.</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
