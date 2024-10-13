import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { CreatedIcon } from "@/shared/icons/CreatedIcon"
import { Link, useNavigate } from "@tanstack/react-router"

import avatar from "@/assets/images/avatar.png";
import { ShadowMany } from "@/shared/ui/shadow/many"
import { Button } from "@/shared/ui/buttons";

export const WalletCreateContent = () => {
  const navigate = useNavigate();

  return (
    <Wrapper cl={"mt-11 flex flex-col flex-1 items-center"}>
      <ShadowMany bg_one={"bg-green"} bg_two={"bg-error"} />
      <LoginTitle 
        icon={<CreatedIcon />}
        cl={"w-72"}
        title={"Wallet Created"} 
        text={"Congratulations, your wallet has been created and is ready to use!"}
      />
      <div className="mt-8 w-full flex flex-col flex-1 justify-between">
        <div>
          <Link className="w-full h-12 rounded-full bg-secondary-100 flex items-center justify-center gap-3" to={"/"}>
            <img className="w-8 h-8 rounded-full" src={avatar} alt="avatar" />
            <span className="flex text-sm font-medium">Account 1</span>
          </Link>
          <p className="text-center mt-3 text-xs text-dot">You can create multiple wallets in your profile</p>
        </div>
        <Button text={"Continue"} color={"bg-button"} onClick={() => navigate({to: "/wallet"})} />
      </div>
    </Wrapper>
  )
}
