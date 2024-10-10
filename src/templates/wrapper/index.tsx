import { ReactNode } from "react"

export const Wrapper = ({ cl, children }: { cl: string, children: ReactNode }) => {
  return (
    <div className={cl}>
      {children}
    </div>
  )
}
