import { FC, useState } from "react"
import { SelectCryptoProps } from "./selectCrypto.interface"
import { OptionCard } from "@/shared/ui/optionCard"
import { OptionCardContent } from "@/shared/ui/optionCard/content"

export const SelectCrypto: FC<SelectCryptoProps> = ({ crypto }) => {
  const [selectCrypto, setSelectCrypto] = useState<number | null>(null)
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-3">
        {crypto.map((item, index) => (
          <OptionCard select={selectCrypto === index} onClick={() => setSelectCrypto(index)} key={index}>
            <OptionCardContent icon={item.icon}>
              <div className="flex flex-1 justify-between">
                <div>
                  <h3 className="text-white text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-swiper-text">{item.second_name}</p>
                </div>
                <div className="mt-1 flex items-end flex-col justify-between gap-1">
                  <p className="flex text-sm text-white">{item.amount}</p>
                  <p className="text-sm font-medium text-green">{item.price}</p>
                </div>
              </div>
            </OptionCardContent>
          </OptionCard>
        ))}
      </div>
    </div>
  )
}
