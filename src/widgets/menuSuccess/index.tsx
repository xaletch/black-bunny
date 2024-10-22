import { SuccessIcon } from "@/shared/icons/SuccessIcon"
import { Button } from "@/shared/ui/buttons"

export const MenuSuccess = ({ text, type, button_text, next }: { text: string, type: string, button_text: string, next: () => void }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-rgba-success">
        <SuccessIcon/>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-white text-xl font-bold">{type}</h3>
        <p className="text-swiper-text text-base">{text}</p>
      </div>
      <div className="mt-8 w-full">
        <Button text={button_text} onClick={next} color={"bg-button"} />
      </div>
    </div>
  )
}
