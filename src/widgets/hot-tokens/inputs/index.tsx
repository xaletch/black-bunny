import { ArrowsIcon } from "@/shared/icons/ArrowsIcon"
import { ReactNode } from "react"

export const HotTokensInputTemplate = ({ children, swap }: { children: ReactNode, swap: () => void }) => {
  return (
    <div className="mt-2">
      <div className="flex flex-col gap-2 relative">
        {children}
        <div className="absolute a-center w-10 h-10 flex items-center justify-center rounded-full bg-secondary-100 bg-f" onClick={swap}><ArrowsIcon /></div>
      </div>
    </div>
  )
}
