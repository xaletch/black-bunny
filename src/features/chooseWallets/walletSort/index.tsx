import { FC } from "react";
import { WalletSortItem } from "./sort.interface";

export const WalletSort: FC<WalletSortItem> = ({ items, select, handleSelect }) => {
  return (
    <div className="mt-4 overflow-hidden">
      <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
        {items.map((item, index) => (
          <div 
            className={`h-10 text-base uppercase rounded-full bg-dark_gray border border-transparent 
            ${select === item.name && "bg-select-category text-[#FFFFFF] border-select-category-border"}`} 
            key={index}
            onClick={() => handleSelect(item.name)}
          >
            <div className="py-2 px-[14px] flex items-center justify-center gap-2">
              {item.icon && <span className="min-w-5">{item.icon}</span>}
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
