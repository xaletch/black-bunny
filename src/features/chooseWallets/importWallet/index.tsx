import { Phrase } from "@/entities/phrase";
import { KeyBigIcon } from "@/shared/icons/KeyBigIcon";
import { PhraseIcon } from "@/shared/icons/PhraseIcon";
import { SolanaIcon } from "@/shared/icons/SolanaIcon";
import { Button } from "@/shared/ui/buttons";
import { Input } from "@/shared/ui/input";
import { ConfirmationMenu } from "@/widgets/confirmationMenu";
import { ImportWaller } from "@/widgets/importWallet";
import { MenuSuccess } from "@/widgets/menuSuccess";
import { PhrasesList } from "@/widgets/phrases";
import { FC, useState } from "react";
import { ImportWalletMenuProps } from "./index.interface";
import { SetWallets } from "@/shared/icons/SetWallets";
import { TonIcon } from "@/shared/icons/TonIcon";
import { BTCIcon } from "@/shared/icons/BTCIcon";

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

export const ImportWalletMenu: FC<ImportWalletMenuProps> = ({ stepImportWallet, setStepImportWallet, setImportWallet }) => {
  const [key, setKey] = useState<string>("");

  const [allPhrases, setAllPhrases] = useState<string[]>(Array(12).fill(""));

  const addPhrase = (index: number, phrase: string) => {
    setAllPhrases((prev) => {
      const newPhrases = [...prev];
      newPhrases[index] = phrase;
      return newPhrases;
    });
  };

  const handleContinue = () => {
    setImportWallet(false);
    setStepImportWallet(0);
  };
  return (
    <ConfirmationMenu close={() => {setImportWallet(false); setStepImportWallet(0)}} isFinish={stepImportWallet === 4}>
          {stepImportWallet === 0 && <ImportWaller items={items} nextStep={() => setStepImportWallet((prev) => prev + 1)} />}
          {stepImportWallet === 1 && (
            <div className="flex flex-col items-center">
              <div className="w-[52px] h-[52px] rounded-full full-w">
                <SolanaIcon />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl text-white font-bold">{"Import Solana Wallet"}</h3>
                <p className="text-base max-w-64 text-swiper-text text-center">{"Are you sure you want to Import a new Solana wallet?"}</p>
              </div>
              <div className="flex flex-col gap-4 w-full mt-5">
                <Button text={"Seed Phrase"} onClick={() => setStepImportWallet(3)} />
                <Button text={"Private Key "} onClick={() => setStepImportWallet(2)} color={"bg-button"}  />
              </div>
            </div>
          )}
          {stepImportWallet === 2 && (
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className={`w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg`}><KeyBigIcon/></div>
                <div>
                  <h3 className="text-xl text-white font-bold">Paste Private Key </h3>
                  <p className="text-base max-w-64 text-swiper-text">Enter your wallet's private key</p>
                </div>
              </div>
              <div className="mt-8">
                <Input value={key} onChange={(e) => setKey(e)} placeholder={"Enter key"} type={"text"} />
              </div>
              <div className="flex flex-col gap-4 w-full mt-6">
                <Button text={"Cancel"} onClick={() => setStepImportWallet(1)} />
                <Button text={"Add Wallet"} onClick={() => setStepImportWallet(4)} color={"bg-button"}  />
              </div>
            </div>
          )}
          {stepImportWallet === 3 && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg`}><PhraseIcon/></div>
                <div>
                  <h3 className="text-xl text-white font-bold">Seed Phrase</h3>
                  <p className="text-base max-w-64 text-swiper-text">Enter your seed phrase</p>
                </div>
              </div>
              <PhrasesList>
                {allPhrases.map((phrase, i) => (
                  <Phrase key={i} phrase={phrase} numeric={i + 1} onChange={(e) => addPhrase(i, e.target.value)} isHide={false} />
                ))}
              </PhrasesList>
              <div className="flex flex-col gap-4 w-full mt-6">
                <Button text={"Cancel"} onClick={() => setStepImportWallet(1)} />
                <Button text={"Add Wallet"} onClick={() => setStepImportWallet(4)} color={"bg-button"}  />
              </div>
            </div>
          )}
          {stepImportWallet === 4 && (
            <MenuSuccess text={"A new account has been added to your wallet."} type={"Success!"} button_text={"Continue"} next={handleContinue} />
          )}
        </ConfirmationMenu>
  )
}
