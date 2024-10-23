import { MiniCard } from "@/shared/ui/miniCard"
import { SendWrapperItems } from "../send/wrapper"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import { ConfirmationMenu } from "../confirmationMenu"
import { SelectCrypto } from "../selectCrypto"
import { Button } from "@/shared/ui/buttons"
import avatar from "@/assets/images/avatar.png";
import { useState } from "react"
import { HachiKunIcon } from "@/shared/icons/HaschiKunIcon"
import { EthereumIcon } from "@/shared/icons/EthereumIcon"
import { OptionCard } from "@/shared/ui/optionCard"
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { SolanaIcon } from "@/shared/icons/SolanaIcon"
import { TonIcon } from "@/shared/icons/TonIcon"
import { EvmIcon } from "@/shared/icons/EvmIcon"
import { useNavigate } from "@tanstack/react-router"

const wallets = [
  {
    img: avatar,
    name: "Account 1",
    coin_icon: <EvmIcon/>,
    coin: "evm",
    id: "1",
  },
  {
    img: avatar,
    name: "Account 2",
    coin_icon: <SolanaIcon/>,
    coin: "sol",
    id: "2",
  },
  {
    img: avatar,
    name: "Account 3",
    coin_icon: <TonIcon/>,
    coin: "ton",
    id: "3",
  }
]

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

export const SendToContent = () => {
  const navigate = useNavigate();

  const [isSelectCrypto, setIsSelectCrypto] = useState<boolean>(false);
  const [isSelectAccount, setIsSelectAccount] = useState<boolean>(false);
  const [selectAccount, setSelectAccount] = useState<string>("Account 1");

  return (
    <Wrapper cl={"pt-4 flex flex-1"} >
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="w-full flex-1 relative z-50 flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-8">
            <SendWrapperItems name={"From"}>
              <MiniCard icon={avatar} onClick={() => setIsSelectAccount(true)}>
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
              <MiniCard icon={<EthereumIcon/>} onClick={() => setIsSelectCrypto(true)}>
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm text-white font-medium">ETH</h4>
                    <span className="flex rotate-90"><ArrowIcon /></span>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-white font-medium">0 USD</p>
                    <p className="text-xs text-swiper-text">0 ETH</p>
                  </div>
                </div>
              </MiniCard>
            </SendWrapperItems>
            <SendWrapperItems name={"To"}>
              <MiniCard icon={avatar} onClick={() => setIsSelectAccount(true)}>
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
              <MiniCard icon={<EthereumIcon/>} onClick={() => setIsSelectCrypto(true)}>
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm text-white font-medium">ETH</h4>
                    <span className="flex rotate-90"><ArrowIcon /></span>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-white font-medium">0 USD</p>
                    <p className="text-xs text-swiper-text">0 ETH</p>
                  </div>
                </div>
              </MiniCard>
            </SendWrapperItems>
          </div>
        </div>
        <div className="mt-8">
          <Button text={"Preview"} onClick={() => navigate({ to: "/wallet/send/to/transaction" })} color={"bg-button"} />
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

      {isSelectAccount && (
        <ConfirmationMenu close={() => setIsSelectAccount(false)}>
          <div>
            <div className="flex flex-col gap-3 pt-9">
            {wallets.map((item, index) => (
              <OptionCard key={index} select={selectAccount === item.name} onClick={() => setSelectAccount(item.name)}>
                <OptionCardContent icon={item.img}>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-white text-base leading-4 font-medium">{item.name}</h3>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="flex">{item.coin_icon}</span>
                      <p className="uppercase text-sm font-medium text-white">{item.coin}</p>
                    </div>
                  </div>
                </OptionCardContent>
              </OptionCard>
            ))}
            </div>
            <div className="mt-8">
            <Button text={"Change"} onClick={() => setIsSelectAccount(false)} color={"bg-button"} />
          </div>
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
