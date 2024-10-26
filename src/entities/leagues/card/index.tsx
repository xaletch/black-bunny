export const LeaguesCardInfo = ({ label, total }: { label: string, total: string }) => {
  return (
    <div className="w-full h-[60px] bg-secondary-100 rounded-xl">
      <div className="px-3 py-2 h-full">
        <p className="text-xs text-swiper-text">{label}</p>
        <h3 className="text-base font-bold mt-1">{total}</h3>
      </div>
    </div>
  )
}
