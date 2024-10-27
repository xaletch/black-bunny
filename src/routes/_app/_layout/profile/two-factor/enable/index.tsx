import { Enable } from '@/pages/two-factor/Enable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/_layout/profile/two-factor/enable/',
)({
  component: () => <Enable />,
})
