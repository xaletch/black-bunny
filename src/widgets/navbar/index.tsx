import { ProfileIcon } from "@/shared/icons/ProfileIcon"
import { TeamIcon } from "@/shared/icons/TeamIcon"
import { TokenIcon } from "@/shared/icons/TokenIcon"
import { TradeIcon } from "@/shared/icons/TradeIcon"
import { WalletIcon } from "@/shared/icons/WalletIcon"
import { Link, useLocation } from "@tanstack/react-router"

const navbar = [
  {
    name: "Wallet",
    icon: <WalletIcon />,
    link: "/wallet"
  },
  {
    name: "Hot tokens",
    icon: <TokenIcon />,
    link: "/token"
  },
  {
    name: "",
    icon: <TradeIcon />,
    link: "/trade"
  },
  {
    name: "Team",
    icon: <TeamIcon />,
    link: "/team"
  },
  {
    name: "Profile",
    icon: <ProfileIcon />,
    link: "/profile"
  }
]

export const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed bottom-0 w-full bg-black shadow-navbar-shadow max-w-[760px] mx-auto">
      <div className="py-2 px-4">
        <ul className="grid items-center grid-cols-[1fr_1fr_48px_1fr_1fr] gap-2">
          {navbar.map((item, index) => (
            <li key={index} className={item.name ? "" : "w-12 h-12 rounded-full bg-button flex items-center justify-center"}>
              <Link to={item.link} className="flex flex-col items-center justify-center">
                <span className={`flex h-[20px items-center ${pathname === item.link ? "item-navbar" : ""}`}>{item.icon}</span>
                <p className={`mt-1 text-[10px] text-[#969696] ${pathname === item.link ? "text-button" : ""}`}>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
