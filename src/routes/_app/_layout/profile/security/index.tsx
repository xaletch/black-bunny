import { Security } from '@/pages/Security'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/profile/security/')({
  component: () => <Security />,
})
