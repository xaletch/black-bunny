import { FC } from "react"
import { ICategoryItem } from "./item.interface"

export const CategoryIcon: FC<ICategoryItem> = ({ name, select, onSelect }) => {
  return (
    <div className={`w-full h-8 text-sm rounded-xl flex items-center justify-center capitalize ${select === name.toLocaleLowerCase() ? 'bg-category-item' : ''}`} onClick={onSelect}>
      <div className="">{name}</div>
    </div>
  )
}
