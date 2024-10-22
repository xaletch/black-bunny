import avatar from "@/assets/images/avatar.png";

export const BridgeAccount = () => {
  return (
    <div className="w-full rounded-[20px] bg-secondary-100">
      <div className="p-3">
        <h3 className="text-base text-white font-bold">Select receiver account</h3>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
            <div>
              <h4 className="text-sm font-medium text-white leading-[1.5]">Account 2</h4>
              <p className="text-sm text-swiper-text leading-[1.5]">Receiver</p>
            </div>
          </div>
          <div>
            <button className="h-11 bg-secondary-100 rounded-full px-5 py-[10px] text-base text-white font-bold">Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}
