import { Wrapper } from "@/templates/wrapper"
import { ConfirmationMenu } from "../confirmationMenu"
import { Button } from "@/shared/ui/buttons"
import { LoginTitle } from "../loginTitle"
import { WarningIcon } from "@/shared/icons/WarningIcon"
import { useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { ProfileTitle } from "@/shared/ui/profile-title"
import { ProfileBlock } from "../profile/block"
import { SettingItem } from "@/shared/ui/setting-item"
import { SettingIcon } from "@/shared/ui/profile-icon"
import { DeleteIcon } from "@/shared/icons/profile/DeleteIcon"
import { AuthorizationIcon } from "@/shared/icons/profile/AuthorizationIcon"

export const TwoFactorContent = () => {
  const navigate = useNavigate();
  const [isTwoFactor, setIsTwoFactor] = useState<boolean>(true);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const handleDelete = () => {
    setIsDisable(false);
    setIsTwoFactor(false);
  }

  return (
    <Wrapper cl={"pt-4 pb-16"}>
      <ProfileTitle title={"Two-Factor Authentication "}>
        {isTwoFactor ? <span className="text-green">Active</span> : "Simple steps for stronger security."}
      </ProfileTitle>
      <div className="mt-5">
        {isTwoFactor ? (
            <ProfileBlock>
              <SettingItem name={"Change 2FA"} link={"/profile/two-factor/enable"} isLine={true}>
                <SettingIcon icon={<AuthorizationIcon />} color={"fe7a00"} />
              </SettingItem>
              <SettingItem name={"Disable 2FA"} link={""} onClick={() => setIsDisable(true)} isLine={false}>
                <SettingIcon icon={<DeleteIcon />} color={"fe2c57"} />
              </SettingItem>
            </ProfileBlock>
          ) : 
          (
            <Button text={"Enable 2FA"} onClick={() => navigate({ to: "/profile/two-factor/enable" })} />
          )
        }
      </div>
      {isDisable && (
        <ConfirmationMenu close={() => setIsDisable(false)}>
          <LoginTitle icon={<WarningIcon/>} title={"Safety Alert"} cl_icon={"icon-32"} color={"bg-red_error"} text={"Disabling 2FA will significantly reduce your account security. Are you sure you want to proceed?"} />
          <div className="mt-8 flex flex-col gap-4">
            <Button text={"Disable 2FA"} onClick={handleDelete} />
            <Button text={"Cancel"} onClick={() => setIsDisable(false)} color={"bg-button"} />
          </div>
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
