import { Link } from "@tanstack/react-router"

export const TradeItem = ({ link, name, description }: { link: string, name: string, description: string }) => {
  return (
    <Link to={link} className="w-full rounded-2xl bg-secondary-100">
      <div className="py-3 px-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-swiper-text mt-[6px]">{description}</p>
      </div>
    </Link>
  )
}
