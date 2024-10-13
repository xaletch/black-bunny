import { CategoryIcon } from "@/shared/ui/category/item"

export const Category = () => {
  return (
    <div className="w-full bg-secondary-100 p-1 rounded-xl grid grid-cols-2">
      <CategoryIcon name={"History"} select={false} />
      <CategoryIcon name={"Assets"} select={true} />
    </div>
  )
}
