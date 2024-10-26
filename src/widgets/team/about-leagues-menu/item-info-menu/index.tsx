import { ConfirmationMenu } from "@/widgets/confirmationMenu"
import { FC } from "react"
import { ItemLeagueMenuProps } from "./menu.interface"
import { LeaguesLienLevel } from "@/entities/leagues/line-level"
import { BonusCard } from "./bonus"

export const ItemInfoMenu:FC<ItemLeagueMenuProps> = ({ close, type, start, end, total, icon, name, turnover, bonus_list }) => {
  return (
    <ConfirmationMenu close={close}>
      <div>
        <h4 className={`text-xl font-bold ${type.toLowerCase() === 'passed' ? 'text-green' : 'text-white'}`}>{type}</h4>
        <div className="mt-5 bg-secondary-100 rounded-2xl backdrop-blur-custom">
          <div className="p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">{icon}</div>
              <div>
                <h5 className="text-white text-base font-bold">{name}</h5>
                <p className="text-swiper-text text-sm">Turnover  ${turnover}</p>
              </div>
            </div>
            <LeaguesLienLevel start={start} end={end} total={total}/>
          </div>
        </div>

        <BonusCard invited_team={bonus_list[0].invited_team} invited_you={bonus_list[0].invited_you} bonus={bonus_list[0].bonus} />
        
      </div>
    </ConfirmationMenu>
  )
}
