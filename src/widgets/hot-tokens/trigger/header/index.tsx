const triggers = ["Price $", "Price WETH"];

export const HotTokensTriggerHeader = ({ select, onClick }: { select: number; onClick: (i: number) => void }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-base text-white font-bold">Trigger</h3>
      <div className="bg-secondary-100 rounded-xl h-10">
        <div className="flex items-center p-1 h-full">
          {triggers.map((trigger, i) => (
            <div className={`h-full flex items-center justify-center text-sm py-1 px-4 rounded-lg ${select === i ? 'bg-category-bg text-white' : 'text-swiper-text opacity-90'}`} key={i} onClick={() => onClick(i)}>
              {trigger}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}