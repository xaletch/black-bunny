import avatar from "@/assets/images/avatar.png"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"
import { Link } from "@tanstack/react-router"

export const SelectAccount = ({ isLink, onClick}: { isLink?: boolean, onClick: () => void }) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8 rounded-full border border-avatar-border" src={avatar} alt="avatar" />
        {isLink ? (
          <Link to={'/wallet/choose'} className="flex items-center gap-1">
            <h3 className="text-sm text-white">Account 1</h3>
            <span className="flex w-4 h-4 arrow"><ArrowIcon/></span>
          </Link>
        ) : (
          <div className="flex items-center gap-1" onClick={onClick}>
            <h3 className="text-sm text-white">Account 1</h3>
            <span className="flex w-4 h-4 arrow"><ArrowIcon/></span>
          </div>
        )}
      </div>
    </div>
  )
}
