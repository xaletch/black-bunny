import { PinIcon } from "@/shared/icons/PinIcon";
import { LoginTitle } from "../loginTitle";
import { Wrapper } from "@/templates/wrapper";
import { Shadow } from "@/shared/ui/shadow";
import { DigitDisplay } from "../digitDisplay";
import { CodeInput } from "@/shared/ui/codeInput";
import { NumPad } from "../numPad";
import { useLoginPin } from "@/shared/hooks/useLoginPin";
import { useNavigate } from '@tanstack/react-router'


export const Pin = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate({to: "/phone"});
  };

  const { firstPin, secondPin, isOneEntry, isError, handleKeys } = useLoginPin(next);

  return (
    <Wrapper cl="mt-11">
      <Shadow cl={"bg-error"} />
      <LoginTitle 
        icon={<PinIcon />} 
        title={isOneEntry ? "Create Your PIN" : "Confirm Your PIN"} 
        text={isOneEntry ? "Keep your wallet safe with a unique PINx" : "Double-check the PIN code you entered"} />
      <div className="mt-8">
        <DigitDisplay size={4}>
          <CodeInput value={isOneEntry ? firstPin[0] : secondPin[0]} isError={isError} isSecret={true} />
          <CodeInput value={isOneEntry ? firstPin[1] : secondPin[1]} isError={isError} isSecret={true} />
          <CodeInput value={isOneEntry ? firstPin[2] : secondPin[2]} isError={isError} isSecret={true} />
          <CodeInput value={isOneEntry ? firstPin[3] : secondPin[3]} isError={isError} isSecret={true} />
        </DigitDisplay>
        <NumPad setKeys={handleKeys} />
      </div>
    </Wrapper>
  )
}
