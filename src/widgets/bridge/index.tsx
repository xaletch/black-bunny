import { SelectAccount } from "@/features/account"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import { BridgeNetwork } from "./network"
import { Swap } from "@/features/swap"
import { InfoIcon } from "@/shared/icons/InfoIcon"
import { AvalancheIcon, BaseIcon, BinanceIcon, EthereumIcon2, PolygonIcon } from "@/shared/icons/NetworksIcon"
import { BridgeAccount } from "./account"
import { Button } from "@/shared/ui/buttons"
import { useState } from "react"
import { OptionCard } from "@/shared/ui/optionCard"
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { ConfirmationMenu } from "../confirmationMenu"
import { LoginTitle } from "../loginTitle"
import { BridgeIcon2 } from "@/shared/icons/Bridge.icon"
import { BridgeConfirmation } from "./confirmation"
import { MenuSuccess } from "../menuSuccess"

const bridge = [
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum",
    min_name: "ETH",
    amount: "0.0163",
    rate: "0.000204 ETH per AVAX",
    value: "$55.92"
  },
  {
    icon: <BaseIcon />,
    name: "BASE",
    min_name: "BASE",
    amount: "79.7053",
    rate: "79.7053 AVAX (Max)",
    value: "$56.95"
  },
  {
    icon: <BinanceIcon />,
    name: "Binance",
    min_name: "BIN",
    amount: "0.0163",
    rate: "0.000204 ETH per AVAX",
    value: "$55.92"
  },
  {
    icon: <PolygonIcon />,
    name: "Polygon",
    min_name: "POLYGON",
    amount: "79.7053",
    rate: "79.7053 AVAX (Max)",
    value: "$56.95"
  },
  {
    icon: <AvalancheIcon />,
    name: "Avalanche",
    min_name: "AVAX",
    amount: "0.0163",
    rate: "0.000204 ETH per AVAX",
    value: "$55.92"
  },
]

const networks = [
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum"
  },
  {
    icon: <BaseIcon />,
    name: "Base"
  },
  {
    icon: <BinanceIcon />,
    name: "Binance Smart Chain (BSC)"
  },
  {
    icon: <PolygonIcon />,
    name: "Polygon"
  },
  {
    icon: <AvalancheIcon />,
    name: "Avalanche"
  }
];

export const BridgeContent = () => {
  const [from, setFrom] = useState<number | null>(null);
  const [selectFrom, setSelectFrom] = useState<number | null>(null);
  const [isFrom, setIsFrom] = useState<boolean>(false);

  const [to, setTo] = useState<number | null>(null);
  const [selectTo, setSelectTo] = useState<number | null>(null);
  const [isTo, setIsTo] = useState<boolean>(false);

  const [info, setInfo] = useState<boolean>(false);

  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [isSelectAccount, setIsSelectAccount] = useState<boolean>(false);
  
  
  const handleSelectFrom = () => {
    setFrom(selectFrom);
    setIsFrom(false)
  }
  const handleSelectTo = () => {
    setTo(selectTo);
    setIsTo(false);
  }

  const handleConfirmation = () => {
    setIsPreview(false)
    setIsSuccess(true);
  }

  return (
    <Wrapper cl={"pt-4 flex-1"} >
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <SelectAccount isLink={false} />
          <button className="flex items-center relative z-50" onClick={() => setInfo(true)}><InfoIcon /></button>
        </div>
        <div className="mt-4">
          <BridgeNetwork />
          <div className="my-3">
            <Swap items={bridge} from={from} selectionFrom={() => setIsFrom(true)} selectTo={() => setIsTo(true)} to={to} />
          </div>
          <BridgeAccount />
        </div>
      </div>
      <div className="mt-8">
        <Button text={"Preview"} onClick={() => setIsPreview(true)} color={"bg-button"}/>
      </div>

        {isFrom && (
          <ConfirmationMenu close={() => setIsFrom(false)}>
            <div className="pt-7">
              <div className="flex flex-col gap-3">
                {networks.map((item, index) => (
                  <OptionCard select={selectFrom === index} onClick={() => setSelectFrom(index)} key={index}>
                    <OptionCardContent icon={item.icon}>
                      <div className="flex flex-1">
                        <h3 className="text-white text-base leading-4 font-medium">{item.name}</h3>
                      </div>
                    </OptionCardContent>
                  </OptionCard>
                ))}
              </div>
              <div className="mt-8">
                <Button text={"Change"} onClick={handleSelectFrom} color={"bg-button"}/>
              </div>
          </div>
          </ConfirmationMenu>
        )}

        {isTo && (
          <ConfirmationMenu close={() => setIsTo(false)}>
            <div className="pt-7">
              <div className="flex flex-col gap-3">
                {networks.map((item, index) => (
                  <OptionCard select={selectTo === index} onClick={() => setSelectTo(index)} key={index}>
                    <OptionCardContent icon={item.icon}>
                      <div className="flex flex-1">
                        <h3 className="text-white text-base leading-4 font-medium">{item.name}</h3>
                      </div>
                    </OptionCardContent>
                  </OptionCard>
                ))}
              </div>
              <div className="mt-8">
                <Button text={"Change"} onClick={handleSelectTo} color={"bg-button"} />
              </div>
          </div>
          </ConfirmationMenu>
        )}

        {info && (
          <ConfirmationMenu close={() => setInfo(false)}>
            <LoginTitle 
              icon={<BridgeIcon2 />} 
              title={"You can now move crypto between blockchains"} 
              text={`Bridging lets you move crypto to another blockchain network, such as Ethereum to Polygon.`} />
              <div className="mt-8">
                <Button text={"Continue"} onClick={() => setInfo(false)} color={"bg-button"} />
              </div>
          </ConfirmationMenu>
        )}

        {isPreview && (
          <ConfirmationMenu close={() => setIsPreview(false)}>
            <div>
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg">
                  <BridgeIcon2 />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Bridge Confirmation</h3>
                  <p className="text-sm text-swiper-text">Please review the details and confirm</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <BridgeConfirmation icon={<AvalancheIcon />} name={"AVAX"} amount={"79.7053 AVAX"} rate={"79.7053 AVAX"} value={"$56.95 USD"} label={"FROM"} />
              <BridgeConfirmation icon={<EthereumIcon2 />} name={"ETH"} amount={"0.0163 ETH"} rate={"0.000204 ETH"} value={"$55.92 USD"} label={"TO"} />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <Button text={"Cancel"} onClick={() => setIsPreview(false)} />
              <Button text={"Continue"} onClick={handleConfirmation} color={"bg-button"} />
            </div>
          </ConfirmationMenu>
        )}
        {isSuccess && (
          <ConfirmationMenu close={() => setIsSuccess(false)}>
            <MenuSuccess text={"Your bridge transaction has been completed successfully"} type={"Success!"} button_text={"Continue"} next={() => setIsSuccess(false)} />
          </ConfirmationMenu>
        )}

        {isSelectAccount && (
          <ConfirmationMenu close={() => setIsSelectAccount(false)}>
            <div>

            </div>
          </ConfirmationMenu>
        )}
    </Wrapper>
  )
}