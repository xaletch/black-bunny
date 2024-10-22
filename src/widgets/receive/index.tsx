import { Wrapper } from "@/templates/wrapper"
import { WalletHead } from "../wallet/head"
import { useState } from "react";
import { BackgroundBlur } from "@/templates/blurBg";
import { Networks } from "@/features/wallet/networks";
import { QrCode } from "./qrcode";
import { Shadow } from "@/shared/ui/shadow";
import { Button } from "@/shared/ui/buttons";
import { ShareIcon } from "@/shared/icons/ShareIcon";
import { EthereumIcon2 } from "@/shared/icons/NetworksIcon";

export const Receive = () => {
  const [chooseCategory, setChooseCategory] = useState<boolean>(false);
  const [selectNetwork, setSelectNetwork] = useState<string>("Ethereum");
  const [selectIcon, setSelectIcon] = useState(<EthereumIcon2/>);

  return (
    <Wrapper cl={"pt-4 flex-1 flex flex-col justify-between"} >
      <Shadow cl={"bg-error"} />
      <div>
        <WalletHead select={selectNetwork} open={() => setChooseCategory(true)} icon={selectIcon} />
        <QrCode />
        <div className="mt-5">
          <div className="px-4">
            <p className="text-center text-sm text-swiper-text font-medium">ETH Tokens received on this network can't be used or traded on other networks like Base, Solana, Binance Smart Chain, Polygon, Avalanche, Arbitrum, or TON.</p>
          </div>
        </div>
      </div>
      <div className="">
        <Button text={"Share"} onClick={() => {}} icon={<ShareIcon />} icon_cl={"w2"} />
      </div>
      {chooseCategory && (
        <BackgroundBlur close={() => setChooseCategory(false)}>
          <div
            className={`absolute bottom-0 left-0 right-0 transition-transform duration-1000 ease-out transform ${
              chooseCategory ? "translate-y-0" : "translate-y-full duration-1000"
            }`}
          >
            <Networks select={selectNetwork} handleSelect={setSelectNetwork} handleSelectIcon={setSelectIcon} close={() => setChooseCategory(false)} />
          </div>
        </BackgroundBlur>
      )}
    </Wrapper>
  )
}
