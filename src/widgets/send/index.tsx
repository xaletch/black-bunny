import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import { Accounts } from "./accounts"
import { Button } from "@/shared/ui/buttons"
import { SendWrapperItems } from "./wrapper"
import { SelectCrypto } from "../selectCrypto"
import { ConfirmationMenu } from "../confirmationMenu"
import { useState } from "react"
import { EthereumIcon } from "@/shared/icons/EthereumIcon"
import { HachiKunIcon } from "@/shared/icons/HaschiKunIcon"
import { MiniCard } from "@/shared/ui/miniCard"

import avatar from "@/assets/images/avatar.png"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"
import { Input } from "@/shared/ui/input/index"
import { QrIcon } from "@/shared/icons/QrIcon"

const crypto = [
  {
    icon: <EthereumIcon />,
    name: "Ethereum",
    second_name: "Ethereum",
    amount: "0.002 ETH",
    price: "$4.91"
  },
  {
    icon: <HachiKunIcon />,
    name: "Hachi-kun",
    second_name: "Ethereum",
    amount: "567,475 HACHI",
    price: "$1.87"
  }
]

export const SendContent = () => {
  const [isSelectCrypto, setIsSelectCrypto] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  
  return (
    <Wrapper cl={"pt-4 flex flex-1"} >
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="w-full flex-1 relative z-50 flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-8">
            <SendWrapperItems name={"From"}>
              <MiniCard icon={avatar} onClick={() => setIsSelectCrypto(true)}>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h4 className="text-sm text-white font-medium">Account 1</h4>
                    <p className="text-xs text-swiper-text">0x4rhHfkB6...B5567r9</p>
                  </div>
                  <div>
                    <span className="flex w-4 h-4 rotate-90"><ArrowIcon /></span>
                  </div>
                </div>
              </MiniCard>
            </SendWrapperItems>
            <SendWrapperItems name={"To"}>
              <Input value={value} onChange={(e) => setValue(e)} cl={'h-14 bg-secondary-100 pr-10'} placeholder={"Enter public address (Ox) or ENS name"} type={"text"} icon={<QrIcon/>} />
            </SendWrapperItems>
          </div>
          <div className="mt-10">
            <Accounts />
          </div>
        </div>
        <div className="mt-8">
          <Button text={"Preview"} onClick={() => {}} color={"bg-button"} />
        </div>
      </div>
      {isSelectCrypto && (
        <ConfirmationMenu close={() => setIsSelectCrypto(false)}>
          <SelectCrypto crypto={crypto} />
          <div className="mt-8">
            <Button text={"Select"} onClick={() => setIsSelectCrypto(false)} color={"bg-button"} />
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
