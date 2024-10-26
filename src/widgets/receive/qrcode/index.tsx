import qrCode from "@/assets/images/QR Code.png"
import { CopyIcon } from "@/shared/icons/CopyIcon"
import CopyText from "@/shared/utils/copyText"

export const QrCode = ({ label, value, isCopy }: { label: string, value: string, isCopy: boolean }) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col w-full items-center">
        <div className="w-[205px]">
          <img className="w-full h-auto" src={qrCode} alt="qrCode" />
        </div>
        <div className="mt-6 w-full">
          <div className="w-full rounded-2xl bg-secondary-100">
            <div className="p-3 flex items-center justify-between">
              <div className="flex flex-col justify-between">
                <span className="text-xs text-swiper-text">{label}</span>
                <div className="text-sm text-white mt-1">{value}</div>
              </div>
              {isCopy && <div>
                <button className="px-5 py-[10px] flex items-center gap-2 text-base font-bold text-white" onClick={() => CopyText(value)}>
                  <span className="w2"><CopyIcon /></span>
                  Copy
                </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
