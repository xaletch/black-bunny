import { FC } from "react"
import { TokenCardHeadProps } from "./head.interface"
import { CopyIcon } from "@/shared/icons/CopyIcon"
import { NoteIcon } from "@/shared/icons/NoteIcon"
import CopyText from "@/shared/utils/copyText"

export const TokensCardHead: FC<TokenCardHeadProps> = ({ avatar, card_numeric, name, CA, P }) => {
  return (
    <div className="flex items-center gap-4">
      <div className='w-12 h-12'>
        <img className="w-full rounded-full" src={avatar} alt={name} />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold text-white leading-[1.5]"><span className="text-green">#{card_numeric}</span> {name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-xs text-white">CA</span>
              <p className="text-xs text-swiper-text">{CA}</p>
            </div>
            <button className="w12" onClick={() => CopyText(CA)}><CopyIcon /></button>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-xs text-white">P</span>
              <p className="text-xs text-swiper-text">{P}</p>
            </div>
            <button className="w12" onClick={() => CopyText(P)}><CopyIcon /></button>
          </div>
        </div>
      </div>
      <div className="w-8 h-8 flex items-center justify-center">
        <NoteIcon />
      </div>
    </div>
  )
}
