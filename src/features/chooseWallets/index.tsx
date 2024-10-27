import { Wrapper } from "@/templates/wrapper"
import { WalletSort } from "./walletSort"
import { SolanaIcon } from "@/shared/icons/SolanaIcon"
import { TonIcon } from "@/shared/icons/TonIcon"
import { EvmIcon } from "@/shared/icons/EvmIcon"
import { useState } from "react"
import { OptionCard } from "@/shared/ui/optionCard"

import avatar from "@/assets/images/avatar.png";
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { WalletSeeIcon } from "@/shared/icons/WalletSeeIcon"
import { Button } from "@/shared/ui/buttons"
import { ImportIcon } from "@/shared/icons/ImportIcon"
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { ImportWalletMenu } from "./importWallet"
import { CreateWalletMenu } from "./createWallet"

const sort = [
  {
    name: "all"
  },
  {
    name: "evm",
    icon: <EvmIcon />
  },
  {
    name: "solana",
    icon: <SolanaIcon />
  }, 
  {
    name: "ton",
    icon: <TonIcon />
  }
];

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

export const ChooseWallets = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [select, setSelect] = useState<string>("all");
  const [selectAccount, setSelectAccount] = useState<string>("Account 1");

  const [isImportWallet, setImportWallet] = useState<boolean>(false);
  const [stepImportWallet, setStepImportWallet] = useState<number>(0);
  const [isCreateWallet, setCreateWallet] = useState<boolean>(false);
  const [stepCreateWallet, setStepCreateWallet] = useState<number>(0);

  const handleSelectAccount = (account: string) => {
    if (location === "/trade/wallets") {
      setSelectAccount(account);
      navigate({ to: "/trade" });
    } else {
      setSelectAccount(account);

    }
  }
  
  return (
    <Wrapper cl="pt-4 flex flex-col flex-1 justify-between overflow-hidden">
      <div>
        <div>
          <h1 className="text-xl text-white font-bold">Wallets</h1>
          <p className="text-sm text-swiper-text">Manage multiple wallets and filter by chains.</p>
        </div>
        <WalletSort select={select} handleSelect={(name) => setSelect(name)} items={sort} />
        <div className="mt-5">
          <div className="flex flex-col gap-3">
            {wallets.map((item, index) => (
              <OptionCard key={index} select={selectAccount === item.name} onClick={() => handleSelectAccount(item.name)}>
                <OptionCardContent icon={item.img}>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-white text-base leading-4 font-medium">{item.name}</h3>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="flex">{item.coin_icon}</span>
                      <p className="uppercase text-sm font-medium text-white">{item.coin}</p>
                    </div>
                  </div>
                  <Link to={`/wallet/${item.id}`} className="flex items-center"><WalletSeeIcon /></Link>
                </OptionCardContent>
              </OptionCard>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button icon={<ImportIcon />} text={"Import Wallet"} onClick={() => setImportWallet(true)} />
        <Button text={"Create Wallet"} onClick={() => setCreateWallet(true)} color={"bg-button"}  />
      </div>
      {isImportWallet && <ImportWalletMenu stepImportWallet={stepImportWallet} setStepImportWallet={setStepImportWallet} setImportWallet={setImportWallet} />}
      {isCreateWallet && <CreateWalletMenu stepCreateWallet={stepCreateWallet} setStepCreateWallet={setStepCreateWallet} setCreateWallet={setCreateWallet}/>}
    </Wrapper>
  )
}
