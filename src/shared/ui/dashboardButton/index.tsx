import { FC } from "react"
import { WalletButtonProps } from "./index.interface"

export const ButtonWallet: FC<WalletButtonProps> = ({ icon, name, onClick, cl }) => {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff0d]">
        <span className={`${cl} flex`}>{icon}</span>
      </button>
      <p className="mt-2 text-sm text-[#FFFFFF] text-center">{name}</p>
    </div>
  )
}
