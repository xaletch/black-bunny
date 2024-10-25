import { GasIcon } from "@/shared/icons/GasIcon"
import { Button } from "@/shared/ui/buttons"
import { ConfirmationMenu } from "@/widgets/confirmationMenu"

export const MenuWhatGasFee = ({ close }: { close: () => void }) => {
  return (
    <ConfirmationMenu close={close}>
    <div>
      <div className="flex items-center gap-4">
        <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full icon-bg"><GasIcon/></div>
        <h3 className="text-xl font-bold text-white">What is the Gas Fee?</h3>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        <p className="text-base text-swiper-text">Gas fees are small amounts of cryptocurrency required to process transactions on a blockchain network.</p>
        <p className="text-base text-swiper-text">These fees compensate network validators for the computational work and energy they use to verify and include transactions in the blockchain.</p>
        <p className="text-base text-swiper-text">Gas fees ensure network security and efficiency, preventing spam and ensuring that transactions are processed quickly.</p>
      </div>
      <div className="mt-8">
        <Button text={"Continue"} onClick={close} color={"bg-button"} />
      </div>
    </div>
  </ConfirmationMenu>
  )
}
