import { FC } from "react"
import { CodeInputProps } from "./code.interface"

export const CodeInput: FC<CodeInputProps> = ({ value, isError }) => {
  return (
    <div className={`w-full h-14 rounded-xl bg-dark_gray flex items-center justify-center text-white border ${isError ? "border-error" : "border-0"}`}>
      <div className="">{value}</div>
    </div>
  )
}
