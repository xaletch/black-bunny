import { useRegisterPin } from '@/shared/hooks/useRegisterPin';
import { PinIcon } from '@/shared/icons/PinIcon';
import { CodeInput } from '@/shared/ui/codeInput';
import { Shadow } from '@/shared/ui/shadow';
import { Wrapper } from '@/templates/wrapper';
import { DigitDisplay } from '@/widgets/digitDisplay';
import { LoginTitle } from '@/widgets/loginTitle';
import { NumPad } from '@/widgets/numPad';
import { useNavigate } from '@tanstack/react-router';

export const PhrasesCreatePinContent = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate({to: "/home"});
  };

  const { firstPin, secondPin, isOneEntry, isError, handleKeys } = useRegisterPin(next);

  return (
    <Wrapper cl="mt-11">
      <Shadow cl={"bg-error"} />
      <LoginTitle 
        icon={<PinIcon />} 
        title={isOneEntry ? "Create Your PIN" : "Confirm Your PIN"} 
        text={isOneEntry ? "Keep your wallet safe with a unique PIN" : "Double-check the PIN code you entered"} />
      <div className="mt-8">
        <DigitDisplay size={"grid-cols-4"}>
          <CodeInput value={isOneEntry ? firstPin[0] : secondPin[0]} isError={isError} isSecret={true} isInput={false} />
          <CodeInput value={isOneEntry ? firstPin[1] : secondPin[1]} isError={isError} isSecret={true} isInput={false} />
          <CodeInput value={isOneEntry ? firstPin[2] : secondPin[2]} isError={isError} isSecret={true} isInput={false} />
          <CodeInput value={isOneEntry ? firstPin[3] : secondPin[3]} isError={isError} isSecret={true} isInput={false} />
        </DigitDisplay>
        <NumPad setKeys={handleKeys} />
      </div>
    </Wrapper>
  )
}
