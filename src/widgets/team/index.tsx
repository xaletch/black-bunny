import { Wrapper } from "@/templates/wrapper"
import { LeaguesLevel } from "./leagues-level"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { TeamItem } from "@/entities/team/item"
import { CopyIcon } from "@/shared/icons/CopyIcon"
import { QrIcon } from "@/shared/icons/QrIcon"
import CopyText from "@/shared/utils/copyText"
import { RewardsWrapper } from "./rewards"
import { RewardsSortWrapper } from "./rewards/sort"
import { RewardSort } from "@/features/reward-sort"
import { useState } from "react"
import { RewardsItemWrapper } from "./rewards/items"
import { RewardItem } from "@/shared/ui/reward-item"
import { ConfirmationMenu } from "../confirmationMenu"
import { ArrowLinearIcon } from "@/shared/icons/ArrowLinearIcon"
import { RewardPeriodMenuList } from "./rewards/period"
import { ListItems } from "@/shared/ui/mini-items"
import { AboutLeaguesMenu, leagues } from "./about-leagues-menu"
import { ItemInfoMenu } from "./about-leagues-menu/item-info-menu"
import { QrCode } from "../receive/qrcode"
import { Button } from "@/shared/ui/buttons"

const periodItems = ["All Time", "Today", "Month", "Year"];

export const TeamContent = () => {
  const [selectReward, setSelectReward] = useState<string>("Month");
  const [isPeriodMenu, setIsPeriodMenu] = useState<boolean>(false);
  const [isLeagues, setIsLeagues] = useState<boolean>(false);
  const [isLeagueItem, setIsLeagueItem] = useState<boolean>(false);
  const [selectLeague, setSelectLeague] = useState<number | null>(null);
  const [isTeamQrCode, setIsTeamQrCode] = useState<boolean>(false);


  const handleSelectPeriod = (value: string) => {
    setSelectReward(value);
    setIsPeriodMenu(false);
  }

  const handleSelectLeague = (value: number) => {
    setSelectLeague(value);
    setIsLeagues(false)
    setIsLeagueItem(true);
  }

  const handleQrCodeCopy = () => {
    CopyText('hrrps://t.me/black_bunny_web3_bot?start=fgh55h');
    setIsTeamQrCode(false);
  }

  return (
    <Wrapper cl={"pt-4 pb-16"}>
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <LeaguesLevel onClick={() => setIsLeagues(true)} />
      <div className="mt-[14px] grid grid-cols-2 gap-2">
        <TeamItem label={"Link"} text={"Referral ID: hdh3.."} onClick={() => CopyText("hdh37747f")} icon={<CopyIcon />} />
        <TeamItem label={"QR Code"} text={"Invite your friends!"} onClick={() => setIsTeamQrCode(true)} icon={<QrIcon/>} />
      </div>
      <RewardsWrapper>
        <RewardsSortWrapper>
          <RewardSort select={selectReward} onClick={() => setIsPeriodMenu(true)}/>
        </RewardsSortWrapper>
      </RewardsWrapper>
      <RewardsItemWrapper>
        <RewardItem count_users={24} text={"Invited by your team. Bonus"} bonus={"15%"} price={"12,680"} />
        <RewardItem count_users={230} text={"Invited by you. Bonus"} bonus={"10%"} price={"57,920"} />
      </RewardsItemWrapper>

      {isPeriodMenu && (
        <ConfirmationMenu close={() => setIsPeriodMenu(false)}>
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg"><ArrowLinearIcon /></div>
            <p className="text-xl font-bold text-white">Select the Period</p>
          </div>
          <RewardPeriodMenuList>
            {periodItems.map((item, index) => (
              <ListItems key={index} handleClick={() => handleSelectPeriod(item)} item={item} />
            ))}
          </RewardPeriodMenuList>
        </ConfirmationMenu>
      )}
      {isLeagues && <AboutLeaguesMenu close={() => setIsLeagues(false)} handleClick={(e) => handleSelectLeague(e)} />}
      {isLeagueItem && (
        <ItemInfoMenu 
          close={() => setIsLeagueItem(false)}
          {...leagues[selectLeague || 0].info}
          icon={leagues[selectLeague || 0].icon} 
          name={leagues[selectLeague || 0].name}
        />
      )}
      {isTeamQrCode && (
        <ConfirmationMenu close={() => setIsTeamQrCode(false)}>
            <QrCode label={"Address"} value={"hrrps://t.me/black_bunny_web3_bot?start=fgh55h"} isCopy={false} />
            <div className="mt-8">
              <Button text={"Copy"} icon={<CopyIcon />} icon_cl={"icon-24 w"} color={"bg-button"} onClick={handleQrCodeCopy} />
            </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
