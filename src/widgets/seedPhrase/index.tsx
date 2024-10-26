import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { Shadow } from "@/shared/ui/shadow"
import { PhraseIcon } from "@/shared/icons/PhraseIcon"
import { Button } from "@/shared/ui/buttons"
import { useNavigate } from "@tanstack/react-router"
import { PhraseItems } from "../phrase"

export const SeedPhraseContent = () => {
  const navigate = useNavigate();

  return (
    <Wrapper cl="mt-11">
      <Shadow cl={"bg-error"} />
      <LoginTitle 
        icon={<PhraseIcon />} 
        title={"Import Using Seed Phrase "} 
        text={"To restore access to your wallet, you need to enter your seed phrase."} />
      <div className="mt-8">
        <PhraseItems isHide={false} />

        <Button text={"Import"} onClick={() => navigate({to: "/seed-phrase/pin"})} color={"bg-button mt-5"}/>
      </div>
    </Wrapper>
  )
}
