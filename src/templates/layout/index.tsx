import { FC, PropsWithChildren } from "react"
import { Header } from "../../widgets/header/header"
import { Navbar } from "@/widgets/navbar"
import { useLocation } from "@tanstack/react-router"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation().pathname;

  const isLocation = [
    "/forgot", "/login", "/forgot/new-pin", "/registration-pin", "/seed-phrase",
    "/seed-phrase/pin", "wallet-created", "/phone", "phone-code", "/wallet/choose"
  ].includes(location) || /\/wallet\/\d+/.test(location);

  return (
    <div className="bg-muted flex flex-col flex-1 relative">
      <Header />
      <main className="flex-1 flex">
        <div className="w-p-calc px-4 pb-4 flex flex-col flex-1">{children}</div>
      </main>
      {!isLocation && <Navbar />}
    </div>
  )
}
