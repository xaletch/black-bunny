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
import { GasIcon } from "@/shared/icons/GasIcon"

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
      {isInfo && (
        <ConfirmationMenu close={() => setIsInfo(false)}>
          <div>
            <div className="flex items-center gap-4">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg"><GasIcon/></div>
              <h3 className="text-xl font-bold text-white">What is the Gas Fee?</h3>
            </div>
            <div className="mt-4 flex flex-col gap-8">
              <p className="text-base text-swiper-text">Gas fees are small amounts of cryptocurrency required to process transactions on a blockchain network.</p>
              <p className="text-base text-swiper-text">These fees compensate network validators for the computational work and energy they use to verify and include transactions in the blockchain.</p>
              <p className="text-base text-swiper-text">Gas fees ensure network security and efficiency, preventing spam and ensuring that transactions are processed quickly.</p>
            </div>
            <div className="mt-8">
              <Button text={"Continue"} onClick={() => setIsInfo(false)} color={"bg-button"} />
            </div>
          </div>
        </ConfirmationMenu>
      )}
      {isConfirm && (
        <ConfirmationMenu close={() => setIsConfirm(false)}>
          <MenuSuccess text={"The transaction was successful."} type={"Success!"} button_text={"Continue"} next={() => setIsConfirm(false)} />
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
