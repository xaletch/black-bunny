export const HotTokensTitle = ({ title, description }: { title: string; description: string; }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-sm text-swiper-text">{description}</p>
    </div>
  )
}
