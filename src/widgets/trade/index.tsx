import { Wrapper } from "@/templates/wrapper"
import { HotTokensHeader } from "../hot-tokens/header"
import { TokenTrade } from "./token-trade"
import { useState } from "react"
import { MenuWhatGasFee } from "../menu/wtah-gas-fee"
import { TradeBalance } from "@/features/trade/balance"
import { TradeSearchSortWrapper } from "./search&sort"
import { Search } from "@/shared/ui/search"
import { TokensCategory } from "../hot-tokens/category"
import { BaseIcon, BinanceIcon, EthereumIcon2 } from "@/shared/icons/NetworksIcon"
import { OptionCard } from "@/shared/ui/optionCard"
import { ConfirmationMenu } from "../confirmationMenu"
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { LoginTitle } from "../loginTitle"
import { NoTradeIcon } from "@/shared/icons/NoTradeIcon"
import { CardsContentWrapper } from "./card-wrapper"
import { TradeCard } from "@/features/trade/trade-card"
import { EthereumIcon } from "@/shared/icons/EthereumIcon"
import { TradeActions } from "./actions"
import { WarningIcon } from "@/shared/icons/WarningIcon"
import { Button } from "@/shared/ui/buttons"
import { useNavigate } from "@tanstack/react-router"

const category = [
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum",
    type: "Eth"
  },
  {
    icon: <BaseIcon />,
    name: "Base",
    type: "Base"
  },
  {
    icon: <BinanceIcon />,
    name: "Binance Smart Chain (BSC)",
    type: "BSC"
  }
];

export const TradeContent = () => {
  const navigate = useNavigate();

  const [selectCategory, setSelectCategory] = useState<number>(1);
  const [isCategory, setIsCategory] = useState<boolean>(false);  

  const [isGas, setIsGas] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const [isActions, setIsActions] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const noTrade = false;

  const handleSelectCategory = (index: number) => {
    setSelectCategory(index);
    setIsCategory(false);
  }

  return (
    <Wrapper cl={"flex flex-col flex-1"}>
      <div>
        <HotTokensHeader link={"/trade/wallets"}/>
        <TokenTrade title={"Token Trade"} text={"Exchange your tokens easily and securely."} isShow={true}>
          <TradeSearchSortWrapper>
            <TokensCategory 
              cl={'w-auto'}
              onClick={() => setIsCategory(prev => !prev)}
              name={category[selectCategory].type}
              icon={category[selectCategory].icon}
            />
            <Search value={searchValue} placeholder={"Token or Pair address..."} onChange={(e) => setSearchValue(e)} />
          </TradeSearchSortWrapper>
          <TradeBalance onClick={() => setIsGas(true)} />
        </TokenTrade>
        {!noTrade && (
          <CardsContentWrapper>
            <TradeCard handleTrade={() =>  navigate({ to: '/trade/token/$/id' })} icon={<BaseIcon />} name={"Brian ArmstrongCoin base"} amount={"148.76"} profit={"+90.09"} ca={"CA: 0x4...B5r9"} orders={"1"} free={"4.65M of 18M"} onActions={() => setIsActions(true)} />
            <TradeCard handleTrade={() => navigate({ to: '/trade/token/$/id' })} icon={<EthereumIcon/>} name={"Pepe"} amount={"148.76"} profit={"+90.09"} ca={"CA: 0x4...B5r9"} orders={"2"} free={"4.65M of 18M"} onActions={() => setIsActions(true)} />
          </CardsContentWrapper>
        )}
      </div>

      {noTrade && (
        <div className="h-full flex justify-center items-center">
          <LoginTitle icon={<NoTradeIcon />} title={"No Trades Yet"} text={"Lets find your first gem."} />
        </div>
      )}

      {isGas && <MenuWhatGasFee close={() => setIsGas(false)} />}
      {isCategory && (
        <ConfirmationMenu close={() => setIsCategory(false)}>
          <div className="pt-7">
            <div className="flex flex-col gap-3">
              {category.map((item, index) => (
                <OptionCard select={selectCategory === index} onClick={() => handleSelectCategory(index)} key={index}>
                  <OptionCardContent icon={item.icon}>
                    <div className="flex flex-1">
                      <h3 className="text-white text-base leading-4 font-medium">{item.name}</h3>
                    </div>
                  </OptionCardContent>
                </OptionCard>
              ))}
            </div>
        </div>
        </ConfirmationMenu>
      )}
      {isActions && <TradeActions close={() => setIsActions(false)} isDelete={() => setIsDelete(true)} />}
      
      {isDelete && (
        <ConfirmationMenu close={() => setIsDelete(false)}>
          <LoginTitle icon={<WarningIcon/>} title={"Confirm Order Deletion"} cl_icon={"icon-32"} color={"bg-red_error"} text={"Are you sure you want to delete orders? This action cannot be undone."} />
          <div className="mt-8 flex flex-col gap-4">
            <Button text={"Delete"} cl={"text-failed"} onClick={() => setIsDelete(false)} />
            <Button text={"Cancel"} onClick={() => setIsDelete(false)} color={"bg-button"} />
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
