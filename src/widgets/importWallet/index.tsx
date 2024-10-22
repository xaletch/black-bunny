import { FC } from "react"
import { ImportWalletItems } from "./index.interface"
import { OptionCardContent } from "@/shared/ui/optionCard/content"
import { OptionCard } from "@/shared/ui/optionCard"

export const ImportWaller:FC<ImportWalletItems> = ({ items, nextStep }) => {
  return (
    <div>
      <div className="">
        <h3 className="text-xl font-bold text-white">Import Wallet</h3>
        <p className="text-sm mt-1 text-swiper-text">Select the blockchain network for wallet import</p>
      </div>
      <div className="mt-5">
        <div className="flex items-center flex-col gap-3">
          {items.map((item, index) => (
            <OptionCard select={false} onClick={nextStep} key={index}>
              <OptionCardContent cl={item.status ? 'opacity-30' : ''} icon={item.icon}>
                <div className={`flex flex-1 ${item.status ? 'justify-between items-center' : 'flex-col'}`}>
                  <h3 className={`text-white text-base font-medium ${item.status ? 'opacity-60' : ''}`}>{item.name}</h3>
                  {item.description && <p className="text-xs text-swiper-text">{item.description}</p>}
                  {item.status && <div className="py-1 px-3 rounded-3xl text-xs text-green bg-secondary-100">{item.status}</div>}
                </div>
              </OptionCardContent>
            </OptionCard>
          ))}
        </div>
      </div>
    </div>
  )
}
