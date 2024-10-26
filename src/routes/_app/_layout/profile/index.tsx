import { Profile } from '@/pages/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/profile/')({
  component: () => <Profile />,
})
