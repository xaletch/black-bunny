import { PhraseCreatePin } from '@/pages/phrasePin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/seed-phrase/pin/')({
  component: () => <PhraseCreatePin />,
})
