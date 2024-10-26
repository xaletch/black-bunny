import { FC, PropsWithChildren } from "react"
import { Navbar } from "@/widgets/navbar"
import { useLocation } from "@tanstack/react-router"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation().pathname;

  const isLocation = [
    "/forgot", "/login", "/forgot/new-pin", "/registration-pin", "/seed-phrase",
    "/seed-phrase/pin", "wallet-created", "/phone", "phone-code", "/wallet/choose",
    "/wallet/receive", "/wallet/bridge", "/wallet/send", "/wallet/receive/id", "/wallet/send/to",
    "/wallet/send/to/transaction", "/hot-tokens/market-order", "/hot-tokens/limit-order", "/hot-tokens/stop-loss-order",
    "/profile/seed-phrase"
  ].includes(location) || /\/wallet\/\d+/.test(location) || /\/wallet\/token\/\d+/.test(location) || /\/wallet\/receive\/\d+/.test(location);

  return (
    <div className="bg-muted flex flex-col flex-1 relative">
      <main className="flex-1 flex">
        <div className="w-p-calc px-4 pb-4 flex flex-col flex-1">{children}</div>
      </main>
      {!isLocation && <Navbar />}
    </div>
  )
}
