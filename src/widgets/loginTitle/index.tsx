import { FC } from "react"
import { LoginTitleProps } from "./loginTitle.interface"

export const LoginTitle: FC<LoginTitleProps> = ({ icon, title, text, color, cl }) => {
  return (
    <div className={`flex items-center flex-col ${cl}`}>
      <div className={`w-[52px] h-[52px] flex items-center justify-center rounded-full ${color ? color : 'icon-bg'}`}>{icon}</div>
      <div className="mt-4">
        <h1 className="text-xl font-bold color-white text-center">{title}</h1>
        <p className="mt-1 text-center text-gray">{text}</p>
      </div>
    </div>
  )
}
