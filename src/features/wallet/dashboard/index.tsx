import { CopyIcon } from "@/shared/icons/CopyIcon"
import { LogoIcon } from "@/shared/icons/LogoIcon"
import { Balance } from "./balance";
import { ButtonWallet } from "@/shared/ui/dashboardButton";
import { ArrowTopIcon } from "@/shared/icons/ArrowTopIcon";
import { BridgeIcon } from "@/shared/icons/BridgeIcon";
import { SupportIcon } from "@/shared/icons/SupportIcon";
import { useNavigate } from "@tanstack/react-router"

export const BalanceCard = () => {
  const navigate = useNavigate();
  const hash = "0x65gf...8rh32ioruyfvbhcnkdeorfiuhgvb";

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <div className="mt-4 shadow-[0 4px 24px 0 rgba(0, 0, 0, 0.15)] rounded-2xl border border-[#ffffff1c] bg-[#000000] relative bg-balance-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r rounded-2xl from-white-transparent-10 to-white-transparent-0 opacity-60 pointer-events-none"></div>
      <div className="p-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#969696]">{hash.slice(0, 13)}</p>
            <button className="flex" onClick={handleCopy}><CopyIcon /></button>
          </div>
          <div><LogoIcon /></div>
        </div>
        <div className="mt-1">
          <Balance />
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-4 justify-between gap-5">
            <ButtonWallet icon={<ArrowTopIcon />} name={"Receive"} cl={""} onClick={() => navigate({ to: `/wallet/receive/$/id` })} />
            <ButtonWallet icon={<BridgeIcon />} name={"Bridge"} cl={""} onClick={() => navigate({ to: `/wallet/bridge` })} />
            <ButtonWallet icon={<ArrowTopIcon />} name={"Send"} cl={"rotate-180"} onClick={() => navigate({ to: "/wallet/send" })} />
            <ButtonWallet icon={<SupportIcon />} name={"Support"} cl={""} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}
