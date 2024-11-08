import { FC, PropsWithChildren, useEffect } from "react"
import { Navbar } from "@/widgets/navbar"
import { useLocation } from "@tanstack/react-router"
import { useCurrentPath } from "@/contexts/current-path";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation().pathname;

  const { setCurrentPath } = useCurrentPath();

  const isLocation = [
    "/forgot", "/login", "/forgot/new-pin", "/registration-pin", "/seed-phrase",
    "/seed-phrase/pin", "/wallet-created", "/phone", "/phone-code", "/wallet/choose",
    "/wallet/receive", "/wallet/bridge", "/wallet/send", "/wallet/receive/id", "/wallet/send/to",
    "/wallet/send/to/transaction", "/hot-tokens/market-order", "/hot-tokens/limit-order", "/hot-tokens/stop-loss-order",
    "/profile/seed-phrase", "/profile/security", "/profile/security/pin", "/profile/language", "/profile/customization",
    "/profile/two-factor", "/profile/two-factor/enable", "/profile/two-factor/change-code", "/profile/two-factor/change/",
    "/trade", "/trade/hide", "/trade/token/id", "/trade/action", "/trade/wallets", "/loading"
  ].includes(location) || /\/wallet\/\d+/.test(location) || /\/wallet\/token\/\d+/.test(location) || /\/wallet\/receive\/\d+/.test(location);

  useEffect(() => {
    setCurrentPath(location);
  }, [location, setCurrentPath]);

  const isLoading = [
    "/loading"
  ].includes(location)

  return (
    <div className="bg-muted flex flex-col flex-1 relative">
      <main className="flex-1 flex">
        <div className={`w-p-calc ${isLoading ? 'px-0' : 'px-4'} pb-4 flex flex-col flex-1`}>{children}</div>
      </main>
      {!isLocation && <Navbar />}
    </div>
  )
}
