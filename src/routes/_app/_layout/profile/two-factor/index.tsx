import { TwoFactor } from '@/pages/TwoFactor'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/profile/two-factor/')({
  component: () => <TwoFactor />,
})
