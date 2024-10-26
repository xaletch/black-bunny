import { CopyIcon } from "@/shared/icons/CopyIcon"
import { Button } from "@/shared/ui/buttons"
import { ProfileTitle } from "@/shared/ui/profile-title"
import CopyText from "@/shared/utils/copyText"
import { Wrapper } from "@/templates/wrapper"
import { PhraseItems } from "@/widgets/phrase"
import { useState } from "react"

export const SeedPhraseContent = () => {
  const [isHide, setIsHide] = useState<boolean>(true);

  const handleHide = () => {
    if (isHide) {
      setIsHide(false)
    } else {
      setIsHide(true)
    }
  }

  return (
    <Wrapper cl={"mt-4"}>
      <ProfileTitle title={"Seed Phrase "}>
        These 12 words are the key to your wallet. 
        Back them up securely, either in the cloud or manually. 
        <span className="text-failed"> Never share these words with anyone, </span>
        as doing so could allow scammers to steal your funds.
      </ProfileTitle>
      <div className="mt-4">
        <PhraseItems isFilled={true} isHide={isHide} />
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <Button text={"Copy"} icon={<CopyIcon />} icon_cl={"icon-24 w2"} onClick={() => CopyText("text")} />
        <Button text={isHide ? "Hold to Reveal" : "Hide"} onClick={handleHide} color={"bg-button"} />
      </div>
    </Wrapper>
  )
}
