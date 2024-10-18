import icon from "@/assets/images/token-icon.png";

export const TokenName = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <div className="min-w-12 h-12">
          <img className="w-full h-full" src={icon} alt={"BrianArmstrongCoinbase USDC2012Normie"} />
        </div>
        <div className="w-[160px]">
          <h4 className="font-medium text-sm text-white">{"BrianArmstrongCoinbase USDC2012Normie"}</h4>
          <p className="text-xs text-swiper-text">{"30,876,444.3455336 BASE"}</p>
        </div>
      </div>
      <div className="flex items-end flex-col">
        <p className="text-sm text-white text-end font-mediumv">{"$0.004657"}</p>
        <span className="text-green text-xs text-end">{"+0.012$ (3.44%)"}</span>
      </div>
    </div>
  )
}
