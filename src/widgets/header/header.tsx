import { ArrowIcon } from "@/shared/icons/ArrowIcon";
import { DotsIcon } from "@/shared/icons/DotsIcon";
import { LogoIcon } from "@/shared/icons/LogoIcon"
import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <header className="w-full bg-black relative z-50">
      <div className="px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="hidden">
            <ArrowIcon />
          </button>
          <Link to={""} className="flex items-center gap-2">
            <LogoIcon />
            <span className="text-md text-white font-medium">Black Bunny</span>
          </Link>
        </div>
        <button className="flex">
          <DotsIcon />
        </button>
      </div>
    </header>
  )
}
