import { Phrase } from "@/entities/phrase"
import { PhrasesList } from "../phrases"
import { useEffect, useState } from "react";

export const PhraseItems = ({ isFilled, isHide }: { isFilled?: boolean, isHide: boolean }) => {
  const [allPhrases, setAllPhrases] = useState<string[]>(Array(12).fill(""));

  const addPhrase = (index: number, phrase: string) => {
    setAllPhrases((prev) => {
      const newPhrases = [...prev];
      newPhrases[index] = phrase;
      return newPhrases;
    });
  };

  useEffect(() => {
    if (isFilled) {
      setAllPhrases(Array(12).fill("text"));
    }
  }, [isFilled])

  return (
    <PhrasesList>
      {allPhrases.map((phrase, i) => (
        <Phrase key={i} phrase={phrase} numeric={i + 1} onChange={(e) => addPhrase(i, e.target.value)} isHide={isHide} />
      ))}
  </PhrasesList>
  )
}
