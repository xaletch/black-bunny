import { Team } from '@/pages/team'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/team/')({
  component: () => <Team />,
})
