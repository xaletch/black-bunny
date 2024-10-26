import { ConfirmationMenu } from '@/widgets/confirmationMenu'
import { AboutLeaguesMenuProps } from './index.interface'
import { FC } from 'react'
import { MenuTitle } from '@/shared/ui/menu-title'
import { StarIcon } from '@/shared/icons/StarIcon'
import { RewardPeriodMenuList } from '../rewards/period'
import { GoldIcon } from '@/shared/icons/leagues/GoldIcon'
import { AboutLeaguesItem } from '@/features/about-leagues-item'
import { MasterIcon } from '@/shared/icons/leagues/MasterIcon'
import { SilverIcon } from '@/shared/icons/leagues/SilverIcon'
import { DiamondIcon } from '@/shared/icons/leagues/DiamondIcon'
import { PlatinumIcon } from '@/shared/icons/leagues/PlatinumIcon'
import { BronzeIcon } from '@/shared/icons/leagues/BronzeIcon'

// eslint-disable-next-line react-refresh/only-export-components
export const leagues = [
  {
    icon: <BronzeIcon />,
    name: "Bronze League",
    bonus: 15,
    status: "Passed",
    info: {
      type: "Passed",
      start: "0",
      end: "100K",
      total: 0,
      turnover: "100,000",
      bonus_list: [{ invited_you: "12", invited_team: "12", bonus: "12" }]
    }
  },
  {
    icon: <SilverIcon />,
    name: "Silver League",
    bonus: 20,
    status: "Passed",
    info: {
      type: "Passed",
      start: "0",
      end: "100K",
      total: 0,
      turnover: "100,000",
      bonus_list: [{ invited_you: "12", invited_team: "12", bonus: "12" }]
    }
  },
  {
    icon: <GoldIcon />,
    name: "Gold League",
    bonus: 25,
    status: "Active",
    info: {
      type: "Active",
      start: "0",
      end: "100K",
      total: 100,
      turnover: "100,000",
      bonus_list: [{ invited_you: "12", invited_team: "12", bonus: "12" }]
    }
  },
  {
    icon: <PlatinumIcon />,
    name: "Platinum League",
    bonus: 30,
    status: "",
    info: {
      type: "Passed",
      start: "0",
      end: "100K",
      total: 0,
      turnover: "100,000",
      bonus_list: [{ invited_you: "12", invited_team: "12", bonus: "12" }]
    }
  },
  {
    icon: <DiamondIcon />,
    name: "Diamond League",
    bonus: 35,
    status: "",
    info: {
      type: "Passed",
      start: "0",
      end: "100K",
      total: 0,
      turnover: "100,000",
      bonus_list: [{ invited_you: "12", invited_team: "12", bonus: "12" }]
    }
  },
  {
    icon: <MasterIcon />,
    name: "Master League",
    bonus: 40,
    status: "",
    info: {
      type: "Passed",
      start: "0",
      end: "100K",
      total: 0,
      turnover: "100,000",
      bonus_list: [{ invited_you: "12", invited_team: "12", bonus: "12" }]
    }
  }
]

export const AboutLeaguesMenu: FC<AboutLeaguesMenuProps> = ({ close, handleClick }) => {
  return (
    <ConfirmationMenu close={close}>
      <MenuTitle icon={<StarIcon />} title={'About Leagues'} description={'Invite friends and earn referral bonuses with our program.'}/>
      <RewardPeriodMenuList>
        {leagues.map((item, index) => (
          <AboutLeaguesItem icon={item.icon} name={item.name} bonus={item.bonus} status={item.status} key={index} handleClick={() => handleClick(index)} />
        ))}
      </RewardPeriodMenuList>
    </ConfirmationMenu>
  )
}
