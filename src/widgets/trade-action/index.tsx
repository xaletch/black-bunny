import { TradeTokenCard } from "@/entities/trade-token-card"
import { StatisticsItem } from "@/shared/ui/statistics-item"
import { Wrapper } from "@/templates/wrapper"
import { HotTokensHeader } from "../hot-tokens/header"
import { OptionCard } from "@/shared/ui/optionCard"
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { BuyIcon } from "@/shared/icons/BuyIcon"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"
import { HotTokensValue } from "../hot-tokens/value"
import { HotTokensButton } from "@/entities/hot-tokens/buttons"
import { HotTokensTemplateButtons } from "../hot-tokens/template/buttons"
import { HotTokensInput } from "@/entities/hot-tokens/input"
import { HotTokensInputTemplate } from "../hot-tokens/inputs"
import { HotTokensValueHeader } from "../hot-tokens/value/head"
import { HotTokensTriggerHeader } from "../hot-tokens/trigger/header"
import { useEffect, useState } from "react"
import { Button } from "@/shared/ui/buttons"
import { ConfirmationMenu } from "../confirmationMenu"
import { MenuSuccess } from "../menuSuccess"
import { MenuWhatGasFee } from "../menu/wtah-gas-fee"
import { MenuOrderSettings } from "../menu/order-settings"
import { useNavigate } from "@tanstack/react-router"
import { HotTokensTrade } from "@/entities/hot-tokens/trade"
import { TradeItem } from "@/entities/hot-tokens/trade/item"
import { SellIcon } from "@/shared/icons/SellIcon"

export const TradeActionContent = () => {
  const navigate = useNavigate();
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [placeholder1, setPlaceholder1] = useState<string>("$0");
  const [placeholder2, setPlaceholder2] = useState<string>("0%");

  const [value3, setValue3] = useState<string>("");
  const [value4, setValue4] = useState<string>("");
  const [placeholder3, setPlaceholder3] = useState<string>("$0");
  const [placeholder4, setPlaceholder4] = useState<string>("0 ETH");
  const [selectTrigger, setSelectTrigger] = useState<number>(0);

  const [isSend, setIsSend] = useState<boolean>(false);
  const [isGas, setIsGas] = useState<boolean>(false);
  const [isOrderSettings, setIsOrderSettings] = useState<boolean>(false); 

  const [isTrade, setIsTrade] = useState<boolean>(false);
  const [selectTrade, setSelectTrade] = useState<number>(0);

  const swapValues = () => {
    setValue1(value2);
    setValue2(value1);
    setPlaceholder1(placeholder2);
    setPlaceholder2(placeholder1)
  };

  const swapValues2 = () => {
    setValue3(value4);
    setValue4(value3);
    setPlaceholder3(placeholder4);
    setPlaceholder4(placeholder3)
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selectTrigger === 0 ? setPlaceholder1("$0") : setPlaceholder1("0 WETH");
  }, [selectTrigger]);

  const handleCreate = () => {
    if (!value1.length && !value2.length && !value3.length && !value4.length) {
      console.log('err')
    } else {
      setIsSend(true);
    }
  }
  
  const handleClick = () => {
    setIsTrade(true);
  }
  return (
    <Wrapper cl={""}>
      <HotTokensHeader link={"/trade/wallets"} />
      <TradeTokenCard>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <StatisticsItem label={"Liquidity"} value={"$97.88K"} />
          <StatisticsItem label={"Volume"} value={"$1.91M"} />
          <StatisticsItem label={"Mcap"} value={"$686.39K"} />
          <StatisticsItem label={"Age"} value={"10h"} />
          <StatisticsItem label={"Trades 24h"} value={"550"} />
          <StatisticsItem label={"DEX"} value={"UNIWAP"} />
        </div>
      </TradeTokenCard>
      <div className="mt-6">
        <OptionCard select={false} onClick={handleClick} cl={"pl-4 py-[6px] pr-5"} border={"rounded-2xl h-16"}>
          <OptionCardContent icon={selectTrade === 0 ? <BuyIcon/> : <SellIcon />} >
            <div className="flex items-center justify-between flex-1 rounded-2xl">
              <div>
                <h3 className="text-white text-xl font-bold">{selectTrade === 0 ? "Buy" : "Sell"}</h3>
                <p className='text-sm text-swiper-text'>{selectTrade === 0 ? "Limit Order" : "Limit Order"}</p>
              </div>
              <div className="w2 rotate-90 icon-24"><ArrowIcon/></div>
            </div>
          </OptionCardContent>
        </OptionCard>
      </div>
      <div className="mt-6">
        <HotTokensValue>
          <HotTokensTriggerHeader select={selectTrigger} onClick={(e: number) => setSelectTrigger(e)} />
          <div>
            <div className="text-xs text-swiper-text">Current Price: <span className="text-white">$0.0478</span></div>
            <HotTokensInputTemplate swap={swapValues}>
              <HotTokensInput value={value1} onChange={(e) => setValue1(e)} placeholder={placeholder1} />
              <HotTokensInput value={value2} onChange={(e) => setValue2(e)} placeholder={placeholder2} />
            </HotTokensInputTemplate>
            <HotTokensTemplateButtons>
              <HotTokensButton value={"$10"} />
              <HotTokensButton value={"50$"} />
              <HotTokensButton value={"100$"} />
              <HotTokensButton value={"100$"} />
            </HotTokensTemplateButtons>
            <div className="mt-2">
              <p className="text-xs text-swiper-text">
                Will <span className='text-green'>buy</span> MOPE after its price goes down <span className='text-failed'>0.00%</span> <br/>
                Market cap will be <span className='text-failed'>0$</span>
              </p>
            </div>
          </div>
        </HotTokensValue>
        <HotTokensValue>
          <HotTokensValueHeader setIsGas={() => setIsGas(true)} setIsSettings={() => setIsOrderSettings(true)} />
          <div className="text-xs text-swiper-text">Balance: <span className="text-white">$0.032 ETH ($120)</span></div>
          <div>
            <div className="text-xs text-swiper-text">Current Price: <span className="text-white">$0.0478</span></div>
            <HotTokensInputTemplate swap={swapValues2}>
              <HotTokensInput value={value3} onChange={(e) => setValue3(e)} placeholder={placeholder3} />
              <HotTokensInput value={value4} onChange={(e) => setValue4(e)} placeholder={placeholder4} />
            </HotTokensInputTemplate>
            <HotTokensTemplateButtons>
              <HotTokensButton value={"25%"} />
              <HotTokensButton value={"50%"} />
              <HotTokensButton value={"75%"} />
              <HotTokensButton value={"90%"} />
            </HotTokensTemplateButtons>
            <div className="mt-2">
              <p className="text-xs text-swiper-text">
                Will <span className='text-green'>buy</span> MOPE after its price goes down <span className='text-failed'>0.00%</span> <br/>
                Market cap will be <span className='text-failed'>0$</span>
              </p>
            </div>
          </div>
        </HotTokensValue>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <Button text={"Cancel"} onClick={() => navigate({ to: '/trade/token/$/id' })}></Button>
        <Button text={"Create Order"} onClick={handleCreate} color={"bg-button"}></Button>
      </div>

      {isSend && (
        <ConfirmationMenu close={() => setIsSend(false)}>
          <MenuSuccess text={'Success!'} type={'Your order has been created successfully'} button_text={'Continue'} next={() => {setIsSend(false); navigate({ to: "/trade/token/$/id" })}}/>
        </ConfirmationMenu>
      )}
      {isGas && <MenuWhatGasFee close={() => setIsGas(false)} />}
      {isOrderSettings && <MenuOrderSettings close={() => setIsOrderSettings(false)}/>}
      {isTrade && (
        <ConfirmationMenu close={() => setIsTrade(false)} h={"h-[465px]"}>
          <div className="pt-7">
            <HotTokensTrade select={selectTrade} onClick={(i) => setSelectTrade(i)} />
            <div className="mt-5">
              <div className="flex flex-col gap-3">
                {selectTrade === 0 ? (
                  <>
                    <TradeItem onClick={() => setIsTrade(false)} name={"Market Order"} description={"Buy immediately at the current market price."}/>
                    <TradeItem onClick={() => setIsTrade(false)} name={"Limit Order"} description={"Set a specific price to buy. Order executes when the market reaches your price."}/>
                  </>
                ) : (
                  <>
                    <TradeItem onClick={() => setIsTrade(false)} name={"Market Order"} description={"Sell immediately at the current market price."}/>
                    <TradeItem onClick={() => setIsTrade(false)} name={"Limit Order"} description={"Set a specific price to sell. Order executes when the market reaches your price."}/>
                    <TradeItem onClick={() => setIsTrade(false)} name={"Stop Loss Order"} description={"Automatically sell when the price drops to your set level to minimize losses."}/>
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
