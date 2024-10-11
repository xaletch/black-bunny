import { SeedPhrase } from '@/pages/seedPhrase'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/seed-phrase/')({
  component: () => <SeedPhrase />,
})
