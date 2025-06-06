import { TokenName } from "@/features/wallet/token/head"
import { TokenHistory } from "@/features/wallet/token/history"
import { TokenInfo } from "@/features/wallet/token/info"
import { Button } from "@/shared/ui/buttons"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import { useNavigate } from "@tanstack/react-router"

export const WalletTokenContent = () => {
  const navigate = useNavigate();

  return (
    <Wrapper cl={"pt-4 flex-1 flex flex-col justify-between"}>
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div>
        <TokenName />
        <TokenInfo />
        <TokenHistory />
      </div>
      <div className="flex items-center gap-2 mt-14">
        <Button text={"Send"} onClick={() => navigate({ to: "/wallet/send/to" })} />
        <Button text={"Receive"} onClick={() => navigate({ to: `/wallet/receive/$/id` })} color={"bg-button"} />
      </div>
    </Wrapper>
  )
}
