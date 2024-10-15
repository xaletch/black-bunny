import { ArrowIcon } from "@/shared/icons/ArrowIcon"
import { KeyIcon } from "@/shared/icons/KeyIcon"
import { TextLabel } from "@/shared/ui/label"
import { Warning } from "@/shared/ui/warning"

export const PrivateKey = ({ showKey }: { showKey: () => void }) => {
  return (
    <div className="mt-8">
      <TextLabel title={"Private Key"} text={"Your private key is like a password that gives you access to all your wallets"} />
      <div className="mb-2">
        <div className="mt-3 w-full h-12 p-3 rounded-2xl bg-dark_gray flex items-center justify-between gap-2 text-sm text-white font-medium" onClick={showKey}>
          <div className="flex items-center gap-2">
            <span className="flex"><KeyIcon /></span>
            Your private key
          </div>
          <button className="w-6 h-6 flex items-center justify-center icon-24"><ArrowIcon /></button>
       </div>
      </div>
      <Warning text={"Keep it safe and never share it with anyone"} />
    </div>
  )
}
