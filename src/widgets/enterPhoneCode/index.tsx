import { VerifyIcon } from "@/shared/icons/VerifyIcon"
import { Shadow } from "@/shared/ui/shadow"
import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { DigitDisplay } from "../digitDisplay"
import { CodeInput } from "@/shared/ui/codeInput"
import { useEnterPhoneCode } from "@/shared/hooks/useEnterPhoneCode"
import { Button } from "@/shared/ui/buttons"
import { ResendCode } from "@/entities/resend"
import { useTimer } from "@/shared/hooks/useTimer"

export const EnterPhoneCode = () => {
  const handleConfirm = () => {
    console.log('confirm')
  }

  const { code, handleCode, handleSubmit } = useEnterPhoneCode(handleConfirm);
  const { min, sec, isCompleted } = useTimer();

  return (
    <Wrapper cl="mt-11 flex flex-col flex-1">
      <Shadow cl={"bg-green"} />
      <LoginTitle 
        icon={<VerifyIcon />} 
        title={"Enter Your Phone Code"} 
        text={"We've sent the code to +******890"} />
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
            {!isCompleted && <ResendCode min={min} sec={sec} />}
          </div>
          <div className="flex flex-col gap-4">
            {isCompleted && <Button text={"Resend Code"} onClick={() => console.log('resend')} />}
            <Button text={"Continue"} onClick={handleSubmit} color={"bg-button"} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
