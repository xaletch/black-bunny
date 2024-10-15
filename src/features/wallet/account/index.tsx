import { EditIcon } from "@/shared/icons/EditIcon"
import { UpdateIcon } from "@/shared/icons/UpdateIcon"
import { FC } from "react"
import { IAccountProps } from "./accout.interface"
import { EvmIcon } from "@/shared/icons/EvmIcon"

export const WalletAccount: FC<IAccountProps> = ({ avatar, name, rename }) => {
  return (
    <div className="rounded-3xl bg-secondary-100 relative">
      <div className="px-5 py-6">
        <div className="absolute top-4 right-5 flex items-center gap-1">
          <span className="flex"><EvmIcon /></span>
          EVM
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 relative">
            <img className="w-full h-full rounded-full" src={avatar} alt={name} />
            <button className="w-7 h-7 flex items-center justify-center backdrop-blur-[24px] bg-white/6 rounded-full absolute bottom-0 right-1"><UpdateIcon /></button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <h3 className="text-base text-white font-medium">{name}</h3>
            <button className="flex items-center" onClick={rename}><EditIcon /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
