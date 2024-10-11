import { ReactNode } from "react"

export const BackgroundBlur = ({ children, close }: { children: ReactNode, close: () => void }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-bg_blur z-50" onClick={close}>
      {children}
    </div>
  )
}
