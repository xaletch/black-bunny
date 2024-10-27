import { ReactNode } from "react"

export const OptionCardContent = ({ icon, children, cl, border }: { icon: string | ReactNode, children: ReactNode, cl?: string, border?: string }) => {
  return (
    <>
      {
        typeof(icon) === 'string' ? <img className={`min-w-11 h-11 ${border ? border : 'rounded-full'}`} src={icon} alt="avatar" /> : 
        <div className={`min-w-11 h-11 full-w ${cl} rounded-full`}>{icon}</div>
      }
      <div className="flex justify-between flex-1">{children}</div>
    </>
  )
}
