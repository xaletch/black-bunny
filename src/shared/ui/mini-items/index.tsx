export const ListItems = ({ handleClick, item }: { handleClick: () => void, item: string }) => {
  return (
    <div className="w-full py-3 px-5 rounded-full bg-dark_gray text-base text-white font-medium" onClick={handleClick}>{item}</div>
  )
}
