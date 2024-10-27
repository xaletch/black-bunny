import { Wrapper } from "@/templates/wrapper"
import { TokensCategory } from "./category"
import { SearchToken } from "./search"
import { TokensCard } from "@/entities/hot-tokens/card"
import { useState } from "react"
import { AllIcon, AvalancheIcon, BaseIcon, BinanceIcon, EthereumIcon2, PolygonIcon } from "@/shared/icons/NetworksIcon"
import { ConfirmationMenu } from "../confirmationMenu"
import { Button } from "@/shared/ui/buttons"
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { OptionCard } from "@/shared/ui/optionCard"

import avatar from "@/assets/images/avatar.png";
import { HotTokensTrade } from "@/entities/hot-tokens/trade"
import { TradeItem } from "@/entities/hot-tokens/trade/item"
import { useNavigate } from "@tanstack/react-router"

const category = [
  {
    icon: <AllIcon />,
    name: "All Chains"
  },
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

const info = {
  liquidity: "97.88K",
  volume: "1.91M",
  mcap: "686.39K",
  age: "10h",
  holders: "550",
  tax: {
    one: "0",
    two: "0"
  }
}

export const HotTokensContent = () => {
  const navigate = useNavigate();
  const [selectCategory, setSelectCategory] = useState<number>(1);
  const [select, setSelect] = useState<number>(1);
  const [isCategory, setIsCategory] = useState<boolean>(false);  
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const [isTrade, setIsTrade] = useState<boolean>(false);
  const [selectTrade, setSelectTrade] = useState<number>(0);
  
  const handleSelectCategory = () => {
    setSelectCategory(select);
    setIsCategory(false);
  }

  return (
    <Wrapper cl={"pt-4 pb-16 flex flex-col flex-1"}>
      <div className="w-full flex gap-3">
        {!isSearch && <TokensCategory onClick={() => setIsCategory(prev => !prev)} name={category[selectCategory].name} icon={category[selectCategory].icon}  />}
        <SearchToken 
          onClick={() => setIsSearch(true)} 
          value={search} 
          onChange={(e: string) => setSearch(e)} 
          isSearch={isSearch}
          close={() => {
            setIsSearch(false);
            setSearch('');
          }}
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-4">
          <TokensCard 
            avatar={avatar}
            card_numeric={"1"}
            name={"Mogged Pepe"}
            CA={"0x4...B5r9"}
            P={"0x4...B5r9"}
            discount={"0.0076"}
            percent={"16,674"}
            isAnalyticUp={true}
            info={info}
            handleTrade={() => setIsTrade(true)}
          />
          <TokensCard
            avatar={avatar}
            card_numeric={"2"}
            name={"Dogwifhat"}
            CA={"0x4...B5r9"}
            P={"0x4...B5r9"}
            discount={"0.0076"}
            percent={"16,674"}
            isAnalyticUp={false}
            info={info}
            handleTrade={() => setIsTrade(true)}
          />
          <TokensCard
            avatar={avatar}
            card_numeric={"3"}
            name={"Dogwifhat"}
            CA={"0x4...B5r9"}
            P={"0x4...B5r9"}
            discount={"0.0076"}
            percent={"16,674"}
            isAnalyticUp={false}
            info={info}
            handleTrade={() => setIsTrade(true)}
          />
        </div>
      </div>

      {/* No Results Found */}
      {/* <SearchNoFound /> */}

      {isCategory && (
        <ConfirmationMenu close={() => setIsCategory(false)}>
          <div className="pt-7">
            <div className="flex flex-col gap-3">
              {category.map((item, index) => (
                <OptionCard select={select === index} onClick={() => setSelect(index)} key={index}>
                  <OptionCardContent icon={item.icon}>
                    <div className="flex flex-1">
                      <h3 className="text-white text-base leading-4 font-medium">{item.name}</h3>
                    </div>
                  </OptionCardContent>
                </OptionCard>
              ))}
            </div>
            <div className="mt-8">
              <Button text={"Change"} onClick={handleSelectCategory} cl={"h-8"} color={"bg-button"}/>
            </div>
        </div>
        </ConfirmationMenu>
      )}

      {isTrade && (
        <ConfirmationMenu close={() => setIsTrade(false)} h={"h-[465px]"}>
          <div className="pt-7">
            <HotTokensTrade select={selectTrade} onClick={(i) => setSelectTrade(i)} />
            <div className="mt-5">
              <div className="flex flex-col gap-3">
                {selectTrade === 0 ? (
                  <>
                    <TradeItem onClick={() => navigate({ to: "/hot-tokens/market-order" })} name={"Market Order"} description={"Buy immediately at the current market price."}/>
                    <TradeItem onClick={() => navigate({ to: "/hot-tokens/limit-order" })} name={"Limit Order"} description={"Set a specific price to buy. Order executes when the market reaches your price."}/>
                  </>
                ) : (
                  <>
                    <TradeItem onClick={() => navigate({ to: "/hot-tokens/market-order" })} name={"Market Order"} description={"Sell immediately at the current market price."}/>
                    <TradeItem onClick={() => navigate({ to: "/hot-tokens/limit-order" })} name={"Limit Order"} description={"Set a specific price to sell. Order executes when the market reaches your price."}/>
                    <TradeItem onClick={() => navigate({ to: "/hot-tokens/stop-loss-order" })} name={"Stop Loss Order"} description={"Automatically sell when the price drops to your set level to minimize losses."}/>
                  </>
                )}
              </div>
            </div>
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
