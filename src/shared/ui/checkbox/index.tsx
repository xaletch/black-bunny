import { FC } from "react"
import { CheckboxProps } from "./checkbox.interface"

export const Checkbox:FC<CheckboxProps> = ({ toggle, checked }) => {
  return (
    <div className="flex items-center gap-[6px]">
      <label className={`${checked ? "bg-button" : "bg-key-border"} relative inline-block w-[36px] h-[20px] rounded-full cursor-pointer transition-colors duration-200`}>
        <input
          className="hidden"
          type="checkbox"
          checked={checked}
          onChange={toggle}
        />
        <span 
          className={`absolute top-[2px] left-[4px] w-[16px] h-[16px] rounded-full transition-transform duration-200 
            ${checked ? "translate-x-[14px] bg-[#FFFFFF]" : "bg-checkbox"}`}
        />
      </label>
    </div>
  );
}
