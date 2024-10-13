import { ChartIcon } from "@/shared/icons/ChartIcon"

export const Balance = () => {
  return (
    <>
      <h3 className="text-4xl font-bold text-[#FFFFFF]">$12,980</h3>
      <div className="flex items-center gap-1 mt-2">
        <span className="flex"><ChartIcon /></span>
        <p className="text-sm text-[#FFFFFF]">$120 (%12)</p>
      </div>
    </>
  )
}
