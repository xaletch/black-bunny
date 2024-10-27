export const StatisticsItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="w-full bg-secondary-100 rounded-lg">
    <div className="px-3 py-2">
      <span className="text-[10px] font-medium text-[#969696]">{label}</span>
      <p className="text-base text-white">{value}</p>
    </div>
  </div>
  )
}
