import { OrderIcon } from "@/shared/icons/OrderIcon"
import { ResetIcon } from "@/shared/icons/ResetIcon"
import { Button } from "@/shared/ui/buttons"
import { ConfirmationMenu } from "@/widgets/confirmationMenu"
import { OrderSettingContent } from "./content"
import { useState } from "react"
import { usePopupToggle } from "@/shared/hooks/usePopup"

export const MenuOrderSettings = ({ close }: { close: () => void }) => {
  const [slippage, setSlippage] = useState<string>("5");
  const [price, setPrice] = useState<string>("10");
  const [isGuard, setIsGuard] = useState<boolean>(true);
  const [isApprove, setIsApprove] = useState<boolean>(false);

  const { handlePopupToggle, openPopup, popupRef } = usePopupToggle();

  return (
    <ConfirmationMenu close={close}>
    <div>
      <div className="flex gap-4">
        <div className="min-w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg"><OrderIcon /></div>
        <div>
          <h3 className="text-xl font-bold text-white">Order Settings</h3>
          <p className="text-sm text-swiper-text">Customize your trade preferences, including slippage tolerance and extra gas price, to optimize transaction success.</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        <OrderSettingContent label={"Slippage %"} value={slippage} onChange={(e) => setSlippage(e)} name={"MEW Guard"} isChecked={isGuard} handleChecked={() => setIsGuard(prev => !prev)} isTooltip={openPopup === "MEW Guard"} onTooltip={() => handlePopupToggle("MEW Guard")} popupRef={popupRef}/>
        <OrderSettingContent label={"Extra Gas Price %"} value={price} onChange={(e) => setPrice(e)} name={"Auto Approve"} isChecked={isApprove} handleChecked={() => setIsApprove(prev => !prev)} isTooltip={openPopup === "Auto Approve"} onTooltip={() => handlePopupToggle("Auto Approve")} popupRef={popupRef}/>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <Button text={"Reset to Default"} icon={<ResetIcon />} icon_cl={"w2"} onClick={close} />
        <Button text={"Continue"} onClick={close} color={"bg-button"} />
      </div>
    </div>
  </ConfirmationMenu>
  )
}
