import { InfoIcon } from "@/shared/icons/InfoIcon"
import { ReviewTransactionItem } from "@/shared/ui/reviewTransactionIcon"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import avatar from "@/assets/images/avatar.png"
import { EthereumIcon2 } from "@/shared/icons/NetworksIcon"
import { Button } from "@/shared/ui/buttons"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { ConfirmationMenu } from "../confirmationMenu"
import { MenuSuccess } from "../menuSuccess"
import { MenuWhatGasFee } from "../menu/wtah-gas-fee"

export const TransactionContent = () => {
  const navigate = useNavigate();

  const [isInfo, setIsInfo] = useState<boolean>(false);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);


  return (
    <Wrapper cl={"pt-4 flex flex-1"} >
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="w-full h-full relative z-50 flex flex-1 flex-col justify-between">
        <div>
        <div className="">
          <h3 className="text-xl text-white font-bold">Review Transaction</h3>
          <p className="text-sm text-swiper-text">Please review all the details carefully. Once confirmed, the transaction cannot be undone.</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            <ReviewTransactionItem avatar={avatar} name={"Account 1"} hash={"0x4rhHfkB6...B5567r9"} type={"FROM"} amount={"1.5 ETH"} amount_icon={<EthereumIcon2 />} value={"3000 USD"}/>
            <ReviewTransactionItem avatar={avatar} name={"Account 1"} hash={"0x4rhHfkB6...B5567r9"} type={"To"} amount={"1.5 ETH"} amount_icon={<EthereumIcon2 />} value={"3000 USD"}/>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="text-swiper-text text-xs">Gas Fee: <span className="text-white">0.005 ETH ($10 USD)</span></p>
            <button className="flex" onClick={() => setIsInfo(true)}><InfoIcon/></button>
          </div>
          <p className="text-swiper-text text-xs mt-2">Total Amount: <span className="text-white">1.505 ETH ($3010 USD)</span></p>
        </div>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <Button text={"Cancel"} onClick={() => navigate({ to: "/wallet/send" })} />
          <Button text={"Confirm"} onClick={() => setIsConfirm(true)} color={"bg-button"} />
        </div>
      </div>
      {isInfo && <MenuWhatGasFee close={() => setIsInfo(false)} />}
      {isConfirm && (
        <ConfirmationMenu close={() => setIsConfirm(false)}>
          <MenuSuccess text={"The transaction was successful."} type={"Success!"} button_text={"Continue"} next={() => setIsConfirm(false)} />
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
