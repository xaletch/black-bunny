import { CopyIcon } from "@/shared/icons/CopyIcon";
import { TextLabel } from "@/shared/ui/label"
import CopyText from "@/shared/utils/copyText";
import { FC } from "react";

interface AddressProps {
  token: string;
}

export const Address: FC<AddressProps> = ({ token }) => {
  return (
    <div>
      <TextLabel title={"Wallet Address "} text={"Your unique cryptocurrency wallet address"} />
      <div className="mt-3 w-full h-12 p-3 rounded-2xl bg-dark_gray flex items-center justify-between gap-2 text-sm text-white font-medium">
        {`${token.slice(0, 24)}...`}
        <button className="w-6 h-6 flex items-center justify-center icon-24" onClick={() => CopyText(token)}><CopyIcon/></button>
      </div>
    </div>
  )
}
