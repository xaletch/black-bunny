import { ReactNode } from "react"

export const OptionCardContent = ({ icon, children }: { icon: string | ReactNode, children: ReactNode }) => {
  return (
    <>
      {
        typeof(icon) === 'string' ? <img className="min-w-11 h-11 rounded-full" src={icon} alt="avatar" /> : 
        <div className="min-w-11 h-11 rounded-full">{icon}</div>
      }
      <div className="flex justify-between flex-1">{children}</div>
    </>
  )
}
