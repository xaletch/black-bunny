import { FC } from "react"
import { PhraseProps } from "./phrase.interface"

export const Phrase: FC<PhraseProps> = ({ phrase, numeric, onChange }) => {
  return (
    <div className="w-full h-11 px-3 rounded-xl bg-dark_gray flex items-center">
      <div className="flex items-center gap-2">
        <span className="flex text-sm text-input_text">{numeric}</span>
        <input className="w-full h-full py-2 bg-transparent text-sm text-white" type="text" value={phrase} onChange={(e) =>onChange(e)} />
      </div>
    </div>
  )
}
