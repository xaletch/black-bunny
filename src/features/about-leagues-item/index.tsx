import { OptionCard } from '@/shared/ui/optionCard'
import { OptionCardContent } from '@/shared/ui/optionCard/content'
import { FC } from 'react'
import { AboutLeaguesItemProps } from './index.interface'

export const AboutLeaguesItem: FC<AboutLeaguesItemProps> = ({ icon, name, bonus, status, handleClick }) => {
  return (
    <OptionCard select={false} onClick={handleClick} cl={"pl-4 py-[6px] pr-5"}>
    <OptionCardContent icon={icon}>
      <div className="flex items-center justify-between flex-1">
        <div>
          <h3 className="text-white text-base leading-4 font-medium">{name}</h3>
          <p className='text-sm text-swiper-text'>Bonus {bonus}%</p>
        </div>
        <p className={`text-sm ${status.toLowerCase() === 'active' ? 'text-green' : 'text-swiper-text'}`}>{status}</p>
      </div>
    </OptionCardContent>
  </OptionCard>
  )
}
