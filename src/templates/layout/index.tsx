import { FC, PropsWithChildren, useEffect } from "react"
import { Navbar } from "@/widgets/navbar"
import { useLocation } from "@tanstack/react-router"
import { useTelegram } from "@/app/providers/telegram";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation().pathname;
  const { webApp } = useTelegram();

  const isLocation = [
    "/forgot", "/login", "/forgot/new-pin", "/registration-pin", "/seed-phrase",
    "/seed-phrase/pin", "/wallet-created", "/phone", "/phone-code", "/wallet/choose",
    "/wallet/receive", "/wallet/bridge", "/wallet/send", "/wallet/receive/id", "/wallet/send/to",
    "/wallet/send/to/transaction", "/hot-tokens/market-order", "/hot-tokens/limit-order", "/hot-tokens/stop-loss-order",
    "/profile/seed-phrase", "/profile/security", "/profile/security/pin", "/profile/language", "/profile/customization",
    "/profile/two-factor", "/profile/two-factor/enable", "/profile/two-factor/change-code", "/profile/two-factor/change/",
    "/trade", "/trade/hide", "/trade/token/id", "/trade/action", "/trade/wallets"
  ].includes(location) || /\/wallet\/\d+/.test(location) || /\/wallet\/token\/\d+/.test(location) || /\/wallet\/receive\/\d+/.test(location);

  const hiddenButton = [
    "/login",
    "/forgot",
    "/forgot/new-pin",
    "/wallet",
    "/seed-phrase",
    "/seed-phrase/pin",
    "/registration-pin",
    "/phone",
    "/phone-code",
    "/wallet-created"
  ];

  useEffect(() => {
    if (webApp) {
      const backButton = webApp.BackButton;
      console.log("button initialized:", backButton);

      if (hiddenButton.includes(location)) {
        backButton.hide();
      } else {
        backButton.show();
      }

      backButton.onClick = () => {
        console.log("click");
        window.history.back();
      };
    } else {
      console.log("webApp not");
    }
  }, [location]);

  return (
    <div className="bg-muted flex flex-col flex-1 relative">
      <main className="flex-1 flex">
        <div className="w-p-calc px-4 pb-4 flex flex-col flex-1">{children}</div>
      </main>
      {!isLocation && <Navbar />}
    </div>
  )
}
