import { ResendCode } from "@/entities/resend";
import { useNavigate } from '@tanstack/react-router';
import { useEnterPhoneCode } from "@/shared/hooks/useEnterPhoneCode";
import { VerifyIcon } from "@/shared/icons/VerifyIcon";
import { Button } from "@/shared/ui/buttons";
import { CodeInput } from "@/shared/ui/codeInput";
import { Shadow } from "@/shared/ui/shadow";
import maskPhoneNumber from "@/shared/utils/maskPhoneNumber";
import { Wrapper } from "@/templates/wrapper";
import { DigitDisplay } from "@/widgets/digitDisplay";
import { LoginTitle } from "@/widgets/loginTitle";

export const PhonePin = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate({to: "/forgot/new-pin"});
  };

  const { code, handleCode, handleSubmit, isError } = useEnterPhoneCode(handleConfirm);

  return (
    <Wrapper cl="mt-11 flex flex-col flex-1">
      <Shadow cl={"bg-green"} />
      <LoginTitle 
        icon={<VerifyIcon />} 
        title={"Enter Your Phone Code"} 
        text={`We've sent the code to ${maskPhoneNumber('8 888 888 8888')}`} />
      <div className="mt-8 flex-1 flex">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <DigitDisplay size={"grid-cols-5"}>
              {code.map((item, index) => (
                <CodeInput
                  key={index}
                  value={item}
                  isError={isError}
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
    </Wrapper>
  )
}

