import { Wrapper } from "@/templates/wrapper"
import { LoginTitle } from "../loginTitle"
import { Shadow } from "@/shared/ui/shadow"
import { PhraseIcon } from "@/shared/icons/PhraseIcon"
import { PhrasesList } from "../phrases"
import { Phrase } from "@/entities/phrase"
import { useState } from "react"
import { Button } from "@/shared/ui/buttons"
import { useNavigate } from "@tanstack/react-router"

export const SeedPhraseContent = () => {
  const navigate = useNavigate();
  const [allPhrases, setAllPhrases] = useState<string[]>(Array(12).fill(""));

  const addPhrase = (index: number, phrase: string) => {
    setAllPhrases((prev) => {
      const newPhrases = [...prev];
      newPhrases[index] = phrase;
      return newPhrases;
    });
  };

  return (
    <Wrapper cl="mt-11">
      <Shadow cl={"bg-error"} />
      <LoginTitle 
        icon={<PhraseIcon />} 
        title={"Import Using Seed Phrase "} 
        text={"To restore access to your wallet, you need to enter your seed phrase."} />
      <div className="mt-8">
        <PhrasesList>
          {allPhrases.map((phrase, i) => (
            <Phrase key={i} phrase={phrase} numeric={i + 1} onChange={(e) => addPhrase(i, e.target.value)} />
          ))}
        </PhrasesList>

        <Button text={"Import"} onClick={() => navigate({to: "/seed-phrase/pin"})} color={"bg-button mt-5"}/>
      </div>
    </Wrapper>
  )
}
