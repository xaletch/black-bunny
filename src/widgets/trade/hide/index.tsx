import { Wrapper } from "@/templates/wrapper"
import { useState } from "react"
import { Search } from "@/shared/ui/search"
import { BaseIcon, BinanceIcon, EthereumIcon2 } from "@/shared/icons/NetworksIcon"
import { OptionCard } from "@/shared/ui/optionCard"
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { TradeCard } from "@/features/trade/trade-card"
import { EthereumIcon } from "@/shared/icons/EthereumIcon"
import { TokenTrade } from "../token-trade"
import { TradeSearchSortWrapper } from "../search&sort"
import { TokensCategory } from "@/widgets/hot-tokens/category"
import { CardsContentWrapper } from "../card-wrapper"
import { LoginTitle } from "@/widgets/loginTitle"
import { ConfirmationMenu } from "@/widgets/confirmationMenu"
import { EyeIcon } from "@/shared/icons/EyeIcon"

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

export const TradeHideContent = () => {
  const [selectCategory, setSelectCategory] = useState<number>(1);
  const [isCategory, setIsCategory] = useState<boolean>(false);  

  const [searchValue, setSearchValue] = useState<string>("");

  const noTrade = true;

  const handleSelectCategory = (index: number) => {
    setSelectCategory(index);
    setIsCategory(false);
  }

  return (
    <Wrapper cl={"flex flex-col flex-1"}>
      <div>
        <TokenTrade title={"Hidden Tokens"} text={"Manage the tokens you want to keep out of your main view for a cleaner and more focused wallet experience."} isShow={false}>
          <TradeSearchSortWrapper>
            <TokensCategory 
              cl={'w-auto'}
              onClick={() => setIsCategory(prev => !prev)}
              name={category[selectCategory].type}
              icon={category[selectCategory].icon}
            />
            <Search value={searchValue} placeholder={"Token or Pair address..."} onChange={(e) => setSearchValue(e)} />
          </TradeSearchSortWrapper>
        </TokenTrade>
        {!noTrade && (
          <CardsContentWrapper>
            <TradeCard handleTrade={() => { } } icon={<BaseIcon />} name={"Brian ArmstrongCoin base"} amount={"148.76"} profit={"+90.09"} ca={"CA: 0x4...B5r9"} orders={"1"} free={"4.65M of 18M"} />
            <TradeCard handleTrade={() => { } } icon={<EthereumIcon/>} name={"Pepe"} amount={"148.76"} profit={"+90.09"} ca={"CA: 0x4...B5r9"} orders={"2"} free={"4.65M of 18M"} />
          </CardsContentWrapper>
        )}
      </div>

      {noTrade && (
        <div className="h-full flex justify-center items-center">
          <LoginTitle icon={<EyeIcon />} title={"No Hidden Tokens Yet"} text={"Your hidden tokens will appear here."} />
        </div>
      )}

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
    </Wrapper>
  )
}
