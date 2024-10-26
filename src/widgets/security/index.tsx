import { Button } from "@/shared/ui/buttons"
import { ProfileTitle } from "@/shared/ui/profile-title"
import { Wrapper } from "@/templates/wrapper"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { ProfileBlock } from "../profile/block"
import { SettingIcon } from "@/shared/ui/profile-icon"
import { SettingItem } from "@/shared/ui/setting-item"
import { ChangePinIcon } from "@/shared/icons/profile/ChangePinIcon"
import { DeleteIcon } from "@/shared/icons/profile/DeleteIcon"
import { ConfirmationMenu } from "../confirmationMenu"
import { LoginTitle } from "../loginTitle"
import { WarningIcon } from "@/shared/icons/WarningIcon"

export const SecurityContent = () => {
  const navigate = useNavigate();
  const [isPin, setIsPin] = useState<boolean>(true);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const handleDelete = () => {
    setIsDisable(false);
    setIsPin(false);
  }


  return (
    <Wrapper cl={"pt-4 pb-16"}>
      <ProfileTitle title={"Enable PIN"}>
        {isPin ? <span className="text-green">Active</span> : "Secure your account by adding a PIN for login."}
      </ProfileTitle>
      <div className="mt-5">
        {isPin ? (
            <ProfileBlock>
              <SettingItem name={"Change PIN"} link={"/profile/security/pin"} isLine={true}>
                <SettingIcon icon={<ChangePinIcon />} color={"fe7a00"} />
              </SettingItem>
              <SettingItem name={"Disable PIN"} link={""} onClick={() => setIsDisable(true)} isLine={false}>
                <SettingIcon icon={<DeleteIcon />} color={"fe2c57"} />
              </SettingItem>
            </ProfileBlock>
          ) : 
          (
            <Button text={"Enable PIN"} onClick={() => navigate({ to: "/profile/security/pin" })} />
          )
        }
      </div>
      {isDisable && (
        <ConfirmationMenu close={() => setIsDisable(false)}>
          <LoginTitle icon={<WarningIcon/>} title={"Safety Alert"} cl_icon={"icon-32"} color={"bg-red_error"} text={"Are you sure you want to remove PIN protection from your account?"} />
          <div className="mt-8 flex flex-col gap-4">
            <Button text={"Disable PIN"} onClick={handleDelete} />
            <Button text={"Cancel"} onClick={() => setIsDisable(false)} color={"bg-button"} />
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
