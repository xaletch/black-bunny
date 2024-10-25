import { SearchIcon } from "@/shared/icons/SearchIcon"
import { FC } from "react"
import { SearchProp } from "./search.interface"
import { CrossIcon } from "@/shared/icons/CrossIcon"

export const SearchToken: FC<SearchProp> = ({ onClick, value, onChange, isSearch, close }) => {
  return (
    <div className={`h-8 p-2 flex items-center rounded-full bg-secondary-100 transition-all duration-300 ${isSearch ? 'w-full' : 'w-auto'}`}  onClick={onClick}>
      {isSearch ? (
        <div className="flex items-center gap-2 w-full">
          {value.length <= 0 && <span className="flex i-search"><SearchIcon /></span>}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search"
            className="flex-grow bg-transparent text-sm text-white placeholder:text-input_text"
          />
          <span className="flex icon-16 i-search" onClick={(e) => {close(); e.stopPropagation()}}><CrossIcon /></span>
        </div>
      ) : (
        <span className="flex d"><SearchIcon /></span>
      )}
    </div>
  )
}
