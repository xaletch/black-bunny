export const Balance = () => {
  return (
    <div className="mt-3 w-full rounded-2xl bg-secondary-100">
      <div className="px-3 py-2">
        <p className="text-xs text-white">Balance</p>
        <div className="">
          <div className="flex items-center gap-1">
            <h3 className="text-2xl font-bold text-white">$156.7</h3>
            <p className="text-sm text-green">+$3.3 (2.14%)</p>
          </div>
          <div className="text-sm text-swiper-text">30,892,411.77 PEPA</div>
        </div>
      </div>
    </div>
  )
}
