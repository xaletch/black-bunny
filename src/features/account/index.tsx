import avatar from "@/assets/images/avatar.png"
import { ArrowIcon } from "@/shared/icons/ArrowIcon"

export const SelectAccount = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8 rounded-full border border-avatar-border" src={avatar} alt="avatar" />
        <div className="flex items-center gap-1">
          <h3 className="text-sm text-white">Account 1</h3>
          <span className="flex w-4 h-4 arrow"><ArrowIcon/></span>
        </div>
      </div>
    </div>
  )
}
