import { SortIcon } from "@/shared/icons/SortIcon"
import { ReactNode } from "react"

export const TradeHistory = ({ children, select, onClick }: { children?: ReactNode, select: string[], onClick: () => void }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h4 className="text-xl text-white font-bold">History</h4>
        <div className="flex items-center gap-1" onClick={onClick}>
          <p className="text-sm font-medium text-swiper-text">{select.length >=6 ? "All" : `${select.length} Selected`}</p>
          <span className="flex w2"><SortIcon /></span>
        </div>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}
