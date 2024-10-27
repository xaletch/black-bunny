import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { Shadow } from "@/shared/ui/shadow"
import { VerifyIcon } from "@/shared/icons/VerifyIcon"
import { Button } from "@/shared/ui/buttons"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { PhoneInput } from "react-international-phone"
import 'react-international-phone/style.css'
import { PhoneNumberUtil } from 'google-libphonenumber';
import { ConfirmationMenu } from "../confirmationMenu"
import { ErrorIcon } from "@/shared/icons/ErrorIcon"

const phoneUtil = PhoneNumberUtil.getInstance(); 
const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    console.log(`phone validate error: ${error}`)
    return false;
  }
};

export const EnterPhone = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [phone, setPhone] = useState('');
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const isValid = isPhoneValid(phone);

  const handleContinue = () => {
    if (isValid) {
      if (location.pathname === "/profile/two-factor/enable" || location.pathname === "/profile/two-factor/change") {
        navigate({ to: "/profile/two-factor/change-code" });
      } else {
        navigate({ to: "/phone-code" });
      }
      localStorage.setItem("phone", phone);
    }
  }; 

  return (
    <Wrapper cl={"mt-11 flex flex-col flex-1"}>
      <Shadow cl={"bg-green"} />
      <LoginTitle 
        icon={<VerifyIcon />} 
        title={location.pathname === "/profile/two-factor/enable" || location.pathname === "/phone" ? "Set Up 2-Step Verification" : "Change 2FA"} 
        text={location.pathname === "/profile/two-factor/enable" || location.pathname === "/phone" ? "Enter your phone number so we can text you an authentication code" : "Enter your current phone number"}
      />
      <div className="mt-8 flex-1 flex flex-col justify-between">
        <PhoneInput
          defaultCountry="en"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          placeholder="Enter phone number"
        />
        <div>
          <div className="flex flex-col gap-4">
            {location.pathname === "/profile/two-factor/enable" || location.pathname === "/profile/two-factor/change" ? (
              <Button text={"Cancel"} onClick={() => navigate({ to: "/profile/two-factor" })} />
            ) : (
              <Button text={"Not Now"} onClick={() => setIsMenu(true)} />
            )}
            <Button text={"Continue"} onClick={handleContinue} color={"bg-button"} />
          </div>
        </div>
      </div>
      {isMenu && <ConfirmationMenu close={() => setIsMenu(false)}>
        <LoginTitle 
          icon={<ErrorIcon />}
          color={"bg-red_error"}
          title={"Protect Your Account"} 
          text={"Your PIN is your key to your account. If you forget it, you won't be able to recover your account without 2FA."}
        />
        <div className="mt-8 flex flex-col gap-4">
          <Button text={"Not Now"} onClick={() => setIsMenu(false)} />
          <Button text={"Enable 2FA"} onClick={() => setIsMenu(false)} color={"bg-button"} />
        </div>
      </ConfirmationMenu>
      }
    </Wrapper>
  )
}
