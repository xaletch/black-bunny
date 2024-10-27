import { FC } from "react"
import { ItemCategoryProps } from "./category.interface"

export const CategoryItem:FC<ItemCategoryProps> = ({ name, select, handleSelect }) => {
  return (
    <div className={`w-full h-14 rounded-2xl bg-secondary-100 flex items-center justify-center text-sm text-white ${select === name ? 'border border-failed' : ''}`} onClick={handleSelect}>{name}</div>
  )
}
