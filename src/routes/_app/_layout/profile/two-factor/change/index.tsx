import { Change } from '@/pages/two-factor/Change'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/_layout/profile/two-factor/change/',
)({
  component: () => <Change />,
})
