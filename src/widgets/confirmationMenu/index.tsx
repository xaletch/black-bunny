import { CrossIcon } from "@/shared/icons/CrossIcon"
import { BackgroundBlur } from "@/templates/blurBg"
import { ReactNode } from "react"

export const ConfirmationMenu = ({ children, close }: { children: ReactNode, close: () => void }) => {
  return (
    <BackgroundBlur close={close}>
      <div className="bg-black px-4 pt-5 pb-8 rounded-t-3xl fixed bottom-0 left-0 right-0 z-50" onClick={(e) => e.stopPropagation()}>
        <div>
          <button className="absolute top-4 right-4 flex items-center" onClick={close}><CrossIcon/></button>
          {children}
        </div>
      </div>
    </BackgroundBlur>
  )
}
