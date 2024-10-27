import { useNavigate } from "@tanstack/react-router"

export const TokenTrade= ({ children, title, text, isShow }: { children: React.ReactNode, title: string, text: string, isShow: boolean }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl text-white font-bold">{title}</h2>
            <p className="text-sm text-swiper-text">{text}</p>
          </div>
          {isShow && <button className="flex text-xs font-bold text-button" onClick={() => navigate({ to: '/trade/hide' })}>Show Hidden</button>}
        </div>
        {children}
      </div>
    </div>
  )
}
