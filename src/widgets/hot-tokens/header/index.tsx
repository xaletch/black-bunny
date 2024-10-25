import avatar from "@/assets/images/avatar.png";
import { EthereumIcon2 } from "@/shared/icons/NetworksIcon";

export const HotTokensHeader = () => {
  return (
    <div className="w-full relative z-50">
      <div className="pt-2 pb-3 grid grid-cols-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img className="w-full rounded-full" src={avatar} alt="account 1" />
          </div>
          <div>
            <h3 className="text-sm text-white">Account 2</h3>
            <p className="text-xs text-swiper-text">0x4rhHfkB6...B5567r9</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <h3 className="text-sm text-white font-medium">$120</h3>
          <div className="flex items-center gap-1">
            <span className="w-4 h-4"><EthereumIcon2/></span>
            <p className="text-xs text-swiper-text">0.032 ETH</p>
          </div>
        </div>
      </div>
    </div>
  )
}
