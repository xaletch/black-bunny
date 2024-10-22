import { FC } from "react";
import { CreateWalletMenuProps } from "./index.interface";
import { ImportWaller } from "@/widgets/importWallet";
import { SetWallets } from "@/shared/icons/SetWallets";
import { SolanaIcon } from "@/shared/icons/SolanaIcon";
import { TonIcon } from "@/shared/icons/TonIcon";
import { BTCIcon } from "@/shared/icons/BTCIcon";
import { ConfirmationMenu } from "@/widgets/confirmationMenu";
import { Button } from "@/shared/ui/buttons";
import { MenuSuccess } from "@/widgets/menuSuccess";
import { LoginTitle } from "@/widgets/loginTitle";
import { Key } from "@/shared/icons/Key";
import { CopyIcon } from "@/shared/icons/CopyIcon";
import CopyText from "@/shared/utils/copyText";

const items = [
  {
    icon: <SetWallets />,
    name: "EVM Compatible Chains",
    description: "Ethererum, Polygon, BNB Chain, KuCoin Chain, Arbitrum, among many others",
  },
  {
    icon: <SolanaIcon />,
    name: "Solana",
  },
  {
    icon: <TonIcon />,
    name: "TON",
  },
  {
    icon: <BTCIcon />,
    name: "Bitcoin",
    status: "Soon"
  }
]

export const CreateWalletMenu: FC<CreateWalletMenuProps> = ({ stepCreateWallet, setStepCreateWallet, setCreateWallet, }) => {
  const key = "0x4B6C5aA04E2459175390eD97Db66d3B5760b6ab4dfghjkl567mnbgv4567fghjkl"

  const handleContinue = () => {
    setCreateWallet(false);
    setStepCreateWallet(0);
  };

  return (
    <ConfirmationMenu close={() => {setCreateWallet(false); setStepCreateWallet(0)}} isFinish={stepCreateWallet === 4}>
          {stepCreateWallet === 0 && <ImportWaller items={items} nextStep={() => setStepCreateWallet((prev) => prev + 1)} />}
          {stepCreateWallet === 1 && (
            <div className="flex flex-col items-center">
              <div className="w-[52px] h-[52px] rounded-full full-w">
                <SolanaIcon />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl text-white font-bold">{"Import Solana Wallet"}</h3>
                <p className="text-base max-w-64 text-swiper-text text-center">{"Are you sure you want to Import a new Solana wallet?"}</p>
              </div>
              <div className="flex flex-col gap-4 w-full mt-5">
                <Button text={"Cancel"} onClick={() => setStepCreateWallet(0)} />
                <Button text={"Private Key "} onClick={() => setStepCreateWallet(2)} color={"bg-button"}  />
              </div>
            </div>
          )}
          {stepCreateWallet === 2 && (
            <div className="flex flex-col items-center">
              <LoginTitle 
                icon={<Key />}
                title={"Your Private Key"} 
                text={"If you want to import a wallet, you will be able to do so thanks to this key"}
              />
              <div className="w-full mt-3 border border-key-border rounded-2xl">
                <div className="p-3">
                  <p className="text-sm text-swiper-text break-words">{key}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full mt-6">
                <Button text={"Copy"} icon={<CopyIcon />} icon_cl={"icon-24 w2"} onClick={() => CopyText(key)} />
                <Button text={"Continue"} onClick={() => setStepCreateWallet(3)} color={"bg-button"}  />
              </div>
            </div>
          )}
          {stepCreateWallet === 3 && (
            <MenuSuccess text={"A new account has been added to your wallet."} type={"Success!"} button_text={"Continue"} next={handleContinue} />
          )}
        </ConfirmationMenu>
  )
}
