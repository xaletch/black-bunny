import { HotTokensInput } from "@/entities/hot-tokens/input"
import { HotTokensInputTemplate } from "../inputs"
import { HotTokensTemplate } from "../template"
import { HotTokensTitle } from "../title"
import { HotTokensValue } from "../value"
import { HotTokensValueHeader } from "../value/head"
import { useState } from "react"
import { HotTokensTemplateButtons } from "../template/buttons"
import { HotTokensButton } from "@/entities/hot-tokens/buttons"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Button } from "@/shared/ui/buttons"
import { Wrapper } from "@/templates/wrapper"
import { MenuSuccess } from "@/widgets/menuSuccess"
import { ConfirmationMenu } from "@/widgets/confirmationMenu"
import { MenuWhatGasFee } from "@/widgets/menu/wtah-gas-fee"
import { MenuOrderSettings } from "@/widgets/menu/order-settings"

export const MarketOrderContent = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [placeholder1, setPlaceholder1] = useState("$0");
  const [placeholder2, setPlaceholder2] = useState("0 ETH");

  const [isSend, setIsSend] = useState<boolean>(false);
  const [isGas, setIsGas] = useState<boolean>(false);
  const [isOrderSettings, setIsOrderSettings] = useState<boolean>(false);

  const swapValues = () => {
    setValue1(value2);
    setValue2(value1);
    setPlaceholder1(placeholder2);
    setPlaceholder2(placeholder1)
  };

  const handleCreate = () => {
    if (!value1.length && !value2.length) {
      console.log('err')
    } else {
      setIsSend(true);
    }
  }

  return (
    <Wrapper cl={"h-full flex flex-col justify-between"}>
      <HotTokensTemplate>
        <HotTokensTitle title={"Market Order"} description={"Buy immediately at the current market price."} />
        <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
        <HotTokensValue>
          <HotTokensValueHeader setIsGas={() => setIsGas(true)} setIsSettings={() => setIsOrderSettings(true)} />
          <div>
            <div className="text-xs text-swiper-text">Balance: <span className="text-white">$0.032 ETH ($120)</span></div>
            <HotTokensInputTemplate swap={swapValues}>
              <HotTokensInput value={value1} onChange={(e) => setValue1(e)} placeholder={placeholder1} />
              <HotTokensInput value={value2} onChange={(e) => setValue2(e)} placeholder={placeholder2} />
            </HotTokensInputTemplate>
            <HotTokensTemplateButtons>
              <HotTokensButton value={"25%"} />
              <HotTokensButton value={"50%"} />
              <HotTokensButton value={"75%"} />
              <HotTokensButton value={"90%"} />
            </HotTokensTemplateButtons>
            <div className="mt-2">
              <p className="text-xs text-swiper-text">Quick Entry</p>
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
