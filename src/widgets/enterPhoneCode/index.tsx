/* eslint-disable @typescript-eslint/no-explicit-any */
import { VerifyIcon } from "@/shared/icons/VerifyIcon"
import { Shadow } from "@/shared/ui/shadow"
import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { DigitDisplay } from "../digitDisplay"
import { CodeInput } from "@/shared/ui/codeInput"
import { useEnterPhoneCode } from "@/shared/hooks/useEnterPhoneCode"
import { Button } from "@/shared/ui/buttons"
import { ResendCode } from "@/entities/resend"
import { useEffect, useState } from "react"
import maskPhoneNumber from "@/shared/utils/maskPhoneNumber"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { MenuSuccess } from "../menuSuccess"
import { ConfirmationMenu } from "../confirmationMenu"

export const EnterPhoneCode = () => {
  const [phone, setPhone] = useState<number | any>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleConfirm = () => {
    localStorage.removeItem('phone');
    setIsSuccess(true);
  }

  const handleNext = () => {
    if (location.pathname === "/profile/two-factor/change-code") {
      navigate({ to: "/profile/two-factor" });
    } else {
      navigate({ to: "/wallet-created" });
    }
  }

  const { code, handleCode, handleSubmit } = useEnterPhoneCode(handleConfirm);

  useEffect(() => {
    if (localStorage.getItem('phone')) {
      const tel = localStorage.getItem('phone')
      setPhone(tel)
    }
  }, [])

  return (
    <Wrapper cl="mt-11 flex flex-col flex-1">
      <Shadow cl={"bg-green"} />
      <LoginTitle 
        icon={<VerifyIcon />} 
        title={"Enter Your Phone Code"} 
        text={`We've sent the code to ${maskPhoneNumber(phone)}`} />
      <div className="mt-8 flex-1 flex">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <DigitDisplay size={"grid-cols-5"}>
              {code.map((item, index) => (
                <CodeInput
                  key={index} 
                  value={item} 
                  isError={false} 
                  isSecret={false} 
                  isInput={true} 
                  onChange={(v: string) => handleCode(v, index)} 
                  index={index} 
                />
              ))}
            </DigitDisplay>
            <ResendCode />
          </div>
          <Button text={"Continue"} onClick={handleSubmit} color={"bg-button"} />
        </div>
      </div>
      {isSuccess && (
        <ConfirmationMenu close={() => setIsSuccess(false)}>
          <MenuSuccess text={"Two-factor authentication is now enabled for your account."} type={"Success!"} button_text={"Continue"} next={handleNext} />
        </ConfirmationMenu>
      )}
    </Wrapper>
  )
}
