import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { Shadow } from "@/shared/ui/shadow"
import { VerifyIcon } from "@/shared/icons/VerifyIcon"
import { Button } from "@/shared/ui/buttons"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { PhoneInput } from "react-international-phone"
import 'react-international-phone/style.css'
import { PhoneNumberUtil } from 'google-libphonenumber';

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

  const [phone, setPhone] = useState('');
  const isValid = isPhoneValid(phone);

  const handleContinue = () => {
    if (isValid) {
      navigate({ to: "/phone-code" });
      localStorage.setItem("phone", phone);
    }
  }; 

  return (
    <Wrapper cl={"mt-11 flex flex-col flex-1"}>
    <Shadow cl={"bg-green"} />
    <LoginTitle 
      icon={<VerifyIcon />} 
      title={"Set Up 2-Step Verification"} 
      text={"Enter your phone number so we can text you an authentication code"} />
      <div className="mt-8 flex-1 flex flex-col justify-between">
        <PhoneInput
          defaultCountry="en"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          placeholder="Enter phone number"
        />
        <div>
          <div className="flex flex-col gap-4">
            <Button text={"Not Now"} onClick={() => console.log('message')} />
            <Button text={"Continue"} onClick={handleContinue} color={"bg-button"} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
