import { SolanaIcon } from "@/shared/icons/SolanaIcon"
import { AccountItems } from "./items"

import avatar from "@/assets/images/avatar.png"
import { TonIcon } from "@/shared/icons/TonIcon"

export const Accounts = () => {
  return (
    <div>
      <h3 className="text-xl text-white font-bold">Your Accounts</h3>
      <p className="text-sm text-swiper-text">Or select an existing account</p>
      <div className="mt-5">
        <div className="flex flex-col gap-4">
          <AccountItems avatar={avatar} name={"Account 2"} text={"0x4rhHfkB6...B5567r9"} price={"120"} amount={"0.032 SOL"} amount_icon={<SolanaIcon/>} />
          <AccountItems avatar={avatar} name={"Account 3"} text={"0x4rhHfkB6...B5567r9"} price={"120"} amount={"0.032 TON"} amount_icon={<TonIcon/>} />
        </div>
      </div>
    </div>
  )
}
