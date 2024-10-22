import { ArrowIcon } from "@/shared/icons/ArrowIcon"

export const BridgeNetwork = () => {
  return (
    <div className="w-full h-14 bg-secondary-100 rounded-2xl">
      <div className="px-3 py-2 h-full flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-white">Network</h3>
          <div className="flex items-center gap-2">
            <div className="text-xs text-swiper-text">
              Source: <span className="text-confirmed">Base</span>
            </div>
            <div className="text-xs text-swiper-text">
              Destination: <span className="text-confirmed">Ethereum</span>
            </div>
          </div>
        </div>
        <div>
          <span className="flex w-4 h-4 rotate-90"><ArrowIcon /></span>
        </div>
      </div>
    </div>
  )
}
