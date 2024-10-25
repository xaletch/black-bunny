import { FC } from "react";
import { TooltipProps } from "./tooltip.interface";

export const Tooltip: FC<TooltipProps> = ({ text }) => {
  return (
    <div className="relative">
      <div className="w-[240px] absolute top-[-40px] left-[-32px] transform -translate-x-1/2 px-4 py-3 text-[#FFFFFF] text-start text-sm bg-[#1f1f1f] rounded-xl shadow-lg z-50">
        {text}
        <div className="absolute bottom-[-12px] left-[12px] transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#1f1f1f]" />
      </div>
    </div>
  );
};