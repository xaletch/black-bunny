export const LeaguesLienLevel = ({ start, end, total }: { start: string; end: string; total: number }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-swiper-text">${start}</p>
        <p className="text-xs text-swiper-text">${end}</p>
      </div>
      <div className="mt-[6px] w-full h-3 rounded-full bg-secondary-100 flex">
        <div className="h-full rounded-full shadow-level bg-level-gradient" style={{ width: `${total}%` }}></div>
      </div>
    </div>
  )
}
