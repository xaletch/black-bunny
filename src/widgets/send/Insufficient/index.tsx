import { TransactionSmileIcon } from "@/shared/icons/TransactionSmileIcon"
import { Button } from "@/shared/ui/buttons"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "@/widgets/loginTitle"
import { useNavigate } from "@tanstack/react-router"

export const InsufficientContent = () => {
  const navigate = useNavigate();

  return (
    <Wrapper cl={"pt-4 flex flex-1 flex-col"} >
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="flex flex-1 justify-center items-center">
        <LoginTitle icon={<TransactionSmileIcon />} title={"Insufficient Tokens for Sending"} text={"Tokens must be received into your account before they can be sent out"}/>  
      </div>
      <div className="">
        <Button text={"Receive"} onClick={() => navigate({ to: "/wallet/receive/$/id" })} color={"bg-button"} />
      </div>
    </Wrapper>
  )
}
