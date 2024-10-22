/* eslint-disable @typescript-eslint/no-explicit-any */
import { CrossIcon } from "@/shared/icons/CrossIcon"
import { AllIcon, AvalancheIcon, BaseIcon, BinanceIcon, EthereumIcon2, PolygonIcon } from "@/shared/icons/NetworksIcon";
import { SelectIcon } from "@/shared/icons/SelectIcon";
import { OptionCard } from "@/shared/ui/optionCard"
import { OptionCardContent } from "@/shared/ui/optionCard/content";
import { FC } from "react";
import { NetworkInterface } from "./networks.interface";

const networks = [
  {
    icon: <AllIcon />,
    name: "All Chains"
  },
  {
    icon: <EthereumIcon2 />,
    name: "Ethereum"
  },
  {
    icon: <BaseIcon />,
    name: "Base"
  },
  {
    icon: <BinanceIcon />,
    name: "Binance Smart Chain (BSC)"
  },
  {
    icon: <PolygonIcon />,
    name: "Polygon"
  },
  {
    icon: <AvalancheIcon />,
    name: "Avalanche"
  }
];

export const Networks: FC<NetworkInterface> = ({ close, select, handleSelect, handleSelectIcon }) => {
  const handleClick = (name: string, icon: any) => {
    handleSelect(name);
    close();
    if (handleSelectIcon) {
        handleSelectIcon(icon);
    }
  };

  return (
    <div className="rounded-t-3xl bg-black fixed bottom-0 left-0 right-0 z-50" onClick={(e) => e.stopPropagation()}>
      <div className="px-4 pt-4 pb-8">
        <button className="flex absolute top-4 right-4" onClick={close}><CrossIcon/></button>
        <div>
          <h3 className="text-white font-bold text-xl">Networks</h3>
          <p className="text-swiper-text text-sm">Select a blockchain network for this wallet.</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-3">
            {networks.map((item, index) => (
              <OptionCard select={select === item.name} onClick={() => handleClick(item.name, item.icon)} key={index}>
                <OptionCardContent icon={item.icon}>
                  <div className="flex flex-1">
                    <h3 className="text-white text-base leading-4 font-medium">{item.name}</h3>
                  </div>
                  {select === item.name &&<div className="flex items-center justify-center"><SelectIcon /></div>}
                </OptionCardContent>
              </OptionCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
