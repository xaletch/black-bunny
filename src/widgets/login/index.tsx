import { Link, useNavigate } from '@tanstack/react-router';
import { Shadow } from "@/shared/ui/shadow"
import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { PinIcon } from "@/shared/icons/PinIcon"
import { DigitDisplay } from "../digitDisplay"
import { CodeInput } from "@/shared/ui/codeInput"
import { NumPad } from "../numPad"
import { useLogin } from '@/shared/hooks/useLogin';


export const LogInContent = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate({to: "/home"});
  };

  const { pin, isError, handleKey } = useLogin(next);

  return (
    <Wrapper cl={"mt-11 flex flex-col flex-1"}>
      <Shadow cl={"bg-green"} />
      <LoginTitle 
        icon={<PinIcon />} 
        title={"PIN"} 
        text={"Enter your PIN below"}
      />
      <div className="mt-8">
        <DigitDisplay size={"grid-cols-4"}>
          <CodeInput value={pin[0]} isError={isError} isSecret={true} isInput={false} />
          <CodeInput value={pin[1]} isError={isError} isSecret={true} isInput={false} />
          <CodeInput value={pin[2]} isError={isError} isSecret={true} isInput={false} />
          <CodeInput value={pin[3]} isError={isError} isSecret={true} isInput={false} />
        </DigitDisplay>
        <NumPad setKeys={handleKey} />
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-3">
          <Link className="text-xs text-white" to={"/forgot"}>I forgot my PIN</Link>
          <span className="w-[6px] h-[6px] rounded-xl bg-dot"></span>
          <Link className="text-xs text-white" to={"/seed-phrase"}>Import using Seed Phrase</Link>
        </div>
      </div>
    </Wrapper>
  )
}
