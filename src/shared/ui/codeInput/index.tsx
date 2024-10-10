import { FC } from "react"
import { CodeInputProps } from "./code.interface"

export const CodeInput: FC<CodeInputProps> = ({ value, isError, isSecret, isInput, onChange, index }) => {
  return (
    <>
      {!isInput ?
        <div className={`w-full h-14 rounded-xl bg-dark_gray flex items-center justify-center text-white border ${isError ? "border-error" : "border-0"}`}>
          <div className="">{isSecret ? value?.replace(value, "●") : value}</div>
        </div>
        :     
        <input
          type="number"
          value={isSecret ? (value ? "●" : "") : value}
          id={`code-input-${index}`}
          onChange={(e) => onChange ? onChange(e.target.value) : {}}
          className={`w-full h-14 text-center rounded-xl bg-dark_gray text-white border ${
            isError ? "border-error" : "border-0"
          }`}
          maxLength={1}
          autoFocus={index === 0}
      />
    }
    </>
  )
}
