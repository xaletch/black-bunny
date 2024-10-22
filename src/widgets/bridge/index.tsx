/* eslint-disable @typescript-eslint/no-unused-vars */
import { SelectAccount } from "@/features/account"
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Wrapper } from "@/templates/wrapper"
import { BridgeNetwork } from "./network"
import { Swap } from "@/features/swap"
import { InfoIcon } from "@/shared/icons/InfoIcon"
import { AvalancheIcon, EthereumIcon2 } from "@/shared/icons/NetworksIcon"
import { BridgeAccount } from "./account"
import { Button } from "@/shared/ui/buttons"
import { useState } from "react"

const bridge = [
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum",
    min_name: "ETH",
    amount: "0.0163",
    rate: "0.000204 ETH per AVAX",
    value: "$55.92"
  },
  {
    icon: <AvalancheIcon />,
    name: "AVAX",
    min_name: "ETH",
    amount: "79.7053",
    rate: "79.7053 AVAX (Max)",
    value: "$56.95"
  },
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum",
    min_name: "ETH",
    amount: "0.0163",
    rate: "0.000204 ETH per AVAX",
    value: "$55.92"
  },
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum",
    min_name: "ETH",
    amount: "79.7053",
    rate: "79.7053 AVAX (Max)",
    value: "$56.95"
  },
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum",
    min_name: "ETH",
    amount: "0.0163",
    rate: "0.000204 ETH per AVAX",
    value: "$55.92"
  },
]

export const BridgeContent = () => {
  const [from, setFrom] = useState<number | null>(0);
  const [to, setTo] = useState<number | null>(null);
  
  return (
    <Wrapper cl={"pt-4 flex-1"} >
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <SelectAccount />
          <button><InfoIcon /></button>
        </div>
        <div className="mt-4">
          <BridgeNetwork />
          <div className="my-3">
            <Swap items={bridge} from={from} to={to} />
          </div>
          <BridgeAccount />
        </div>
      </div>
      <div className="mt-8">
        <Button text={"Preview"} onClick={() => {}} color={"bg-button"}/>
      </div>
    </Wrapper>
  )
}
