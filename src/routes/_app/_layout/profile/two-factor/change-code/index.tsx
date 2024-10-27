import { ChangeCode } from '@/pages/two-factor/Code'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/_layout/profile/two-factor/change-code/',
)({
  component: () => (
    <ChangeCode />
  ),
})
