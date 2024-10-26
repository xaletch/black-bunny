import { LeaguesCardInfo } from "@/entities/leagues/card"
import { CurrentLeagues } from "@/entities/leagues/current"
import { LeaguesLienLevel } from "@/entities/leagues/line-level"
import { Button } from "@/shared/ui/buttons"

export const LeaguesLevel = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="bg-secondary-100 rounded-2xl backdrop-blur-custom">
      <div className="p-3">
        <CurrentLeagues onClick={onClick}/>
        <LeaguesLienLevel start={"70,600"} end={"500K"} total={30} />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <LeaguesCardInfo label={"Personal turnover"} total={"$50,000"} />
          <LeaguesCardInfo label={"Referral turnover"} total={"$20,600"} />
        </div>
        <div className="mt-4">
          <Button text={"Claim"} onClick={() => {}} cl={"h-8 text-sm font-medium"} color={"bg-button"} />
        </div>
      </div>
    </div>
  )
}
