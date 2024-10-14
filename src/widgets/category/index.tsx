import { CategoryIcon } from "@/shared/ui/category/item"
import { ICategory } from "./catagory.interface"
import { FC } from "react"

export const Category: FC<ICategory> = ({ category, select, setSelect }) => {
  return (
    <div className="w-full bg-secondary-100 p-1 rounded-xl grid grid-cols-2">
      {category.map((item, index) => (
        <CategoryIcon key={index} name={item} select={select} onSelect={() => setSelect(item)} />
      ))}
    </div>
  )
}
