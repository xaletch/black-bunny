import { CopyIcon } from "@/shared/icons/CopyIcon"
import CopyText from "@/shared/utils/copyText"

export const TokenInfo = () => {
  const copyHash = (hash: string) => {
    CopyText(hash)
  }
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full rounded-lg bg-secondary-100 col-span-2">
          <div className="py-2 px-3">
            <h3 className="text-2xl">${'156.7'}</h3>
            <p className="text-sm text-swiper-text">30,892,411.77 BASE <span className="text-green text-sm">+$3.3 (2.14%)</span></p>
            <div className="flex items-center gap-1">
              <span className="text-xs text-swiper-text">0x4...B5r9</span>
              <button onClick={() => copyHash('0x4...B5r9')}><CopyIcon /></button>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg bg-secondary-100">
          <div className="py-2 px-3">
            <span className="text-[10px] leading-4 text-swiper-text">{'Bought'}</span>
            <h3 className="mt-1 text-base text-white">{'$76.74'}</h3>
            <p className="text-sm text-swiper-text">{'16,850,605.78 BASE'}</p>
          </div>
        </div>
        <div className="w-full rounded-lg bg-secondary-100">
          <div className="py-2 px-3">
            <span className="text-[10px] leading-4 text-swiper-text">{'Sold'}</span>
            <h3 className="mt-1 text-base text-white">{'$0'}</h3>
            <p className="text-sm text-swiper-text">{'0 BASE'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
