import { InfoIcon } from "@/shared/icons/InfoIcon"
import { Input } from "@/shared/ui/input"
import { FC } from "react"
import { OrderSettingContentProps } from "./content.interface"
import { Checkbox } from "@/shared/ui/checkbox"
import { Tooltip } from "@/shared/ui/tooltip"

export const OrderSettingContent:FC<OrderSettingContentProps> = ({ label, value, onChange, name, isChecked, handleChecked, isTooltip, onTooltip, popupRef }) => {
  return (
    <div>
      <div className="flex items-center gap-1" ref={popupRef}>
        <p className="text-sm text-white">{label}</p>
        <button className="flex relative icon-16" onClick={onTooltip}>
          <InfoIcon />
          {isTooltip && <Tooltip text={"An additional gas fee percentage to speed up your transaction processing."} />}  
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <Input value={value} onChange={onChange} placeholder={""} type={"number"} />
        <div className="rounded-xl border border-key-border">
          <div className="p-3 flex items-center justify-between">
            <p className="text-sm text-white">{name}</p>
            <Checkbox toggle={handleChecked} checked={isChecked} />
          </div>
        </div>
      </div>
    </div>
  )
}
