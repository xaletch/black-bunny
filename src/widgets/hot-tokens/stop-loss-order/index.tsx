import { useEffect, useState } from 'react'
import { HotTokensTemplate } from '../template';
import { Wrapper } from '@/templates/wrapper';
import { HotTokensTitle } from '../title';
import { ShadowMany } from '@/shared/ui/shadow/many';
import { HotTokensValue } from '../value';
import { HotTokensValueHeader } from '../value/head';
import { HotTokensInputTemplate } from '../inputs';
import { HotTokensInput } from '@/entities/hot-tokens/input';
import { HotTokensTemplateButtons } from '../template/buttons';
import { HotTokensButton } from '@/entities/hot-tokens/buttons';
import { HotTokensTriggerHeader } from '../trigger/header';
import { Button } from '@/shared/ui/buttons';
import { MenuSuccess } from '@/widgets/menuSuccess';
import { ConfirmationMenu } from '@/widgets/confirmationMenu';
import { MenuWhatGasFee } from '@/widgets/menu/wtah-gas-fee';
import { MenuOrderSettings } from '@/widgets/menu/order-settings';

export const StopLossOrderContent = () => {
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

  return (
    <Wrapper cl={"h-full flex flex-col justify-between"}>
      <HotTokensTemplate>
        <HotTokensTitle title={"Stop Loss Order"} description={"Automatically sell when the price drops to your set level to minimize losses."} />
        <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
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
      </HotTokensTemplate>
      <Button text={"Create Order"} onClick={handleCreate} color={"bg-button"}></Button>

      {isSend && (
        <ConfirmationMenu close={() => setIsSend(false)}>
          <MenuSuccess text={'Success!'} type={'Your order has been created successfully'} button_text={'Continue'} next={() => setIsSend(false)}/>
        </ConfirmationMenu>
      )}
      {isGas && <MenuWhatGasFee close={() => setIsGas(false)} />}
      {isOrderSettings && <MenuOrderSettings close={() => setIsOrderSettings(false)}/>}
    </Wrapper>
  )
}
