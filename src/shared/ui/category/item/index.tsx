import { FC } from "react"
import { ICategoryItem } from "./item.interface"

export const CategoryIcon: FC<ICategoryItem> = ({ name, select }) => {
  return (
    <div className={`w-full h-8 text-sm rounded-xl flex items-center justify-center ${select ? 'bg-category-item' : ''}`}>
      <div className="">{name}</div>
    </div>
  )
}
