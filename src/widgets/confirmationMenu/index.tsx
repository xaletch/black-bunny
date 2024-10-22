import { CrossIcon } from "@/shared/icons/CrossIcon"
import { BackgroundBlur } from "@/templates/blurBg"
import { FC } from "react"
import { ConfirmationMenuProps } from "./confirmation.interface"

export const ConfirmationMenu: FC<ConfirmationMenuProps> = ({ children, close, isFinish }) => {
  return (
    <BackgroundBlur close={close}>
      <div className="bg-black px-4 pt-5 pb-8 h-auto rounded-t-3xl fixed bottom-0 left-0 right-0 z-50" onClick={(e) => e.stopPropagation()}>
        {isFinish && <div className={`absolute left-2/4 -top-24 -translate-x-2/4 w-[232px] h-[232px] rounded-full blur-[140px] bg-success-shadow`}></div>}
        <div className="">
          {!isFinish && <button className="absolute top-4 right-4 flex items-center" onClick={close}><CrossIcon/></button>}
          {children}
        </div>
      </div>
    </BackgroundBlur>
  )
}
