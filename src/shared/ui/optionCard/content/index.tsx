import { ReactNode } from "react"

export const OptionCardContent = ({ icon, children, cl }: { icon: string | ReactNode, children: ReactNode, cl?: string }) => {
  return (
    <>
      {
        typeof(icon) === 'string' ? <img className={`min-w-11 h-11 rounded-full`} src={icon} alt="avatar" /> : 
        <div className={`min-w-11 h-11 rounded-full full-w ${cl}`}>{icon}</div>
      }
      <div className="flex justify-between flex-1">{children}</div>
    </>
  )
}
