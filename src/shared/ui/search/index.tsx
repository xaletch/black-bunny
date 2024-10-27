import { FC } from "react";
import { SearchProps } from "./search.interface";
import { SearchIcon } from "@/shared/icons/SearchIcon";

export const Search:FC<SearchProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className={`h-8 p-2 flex flex-1 items-center rounded-full bg-secondary-100 transition-all duration-300 'w-full' }`} >
      <div className="flex items-center gap-2 w-full">
        {value.length <= 0 && <span className="flex i-search"><SearchIcon /></span>}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-grow bg-transparent text-sm text-white placeholder:text-input_text"
        />
      </div>
    </div>
  )
}
