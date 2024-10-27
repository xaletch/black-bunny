export const TradeItem = ({ name, description, onClick }: { name: string, description: string, onClick: () => void }) => {
  return (
    <div className="w-full rounded-2xl bg-secondary-100" onClick={onClick}>
      <div className="py-3 px-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-swiper-text mt-[6px]">{description}</p>
      </div>
    </div>
  )
}
