export const HotTokensButton = ({ value }: { value: string }) => {
  return (
    <div className="w-full h-8 py-1 px-2 rounded-full bg-dark_gray flex items-center justify-center text-sm text-white font-medium">
      {value}
    </div>
  )
}
