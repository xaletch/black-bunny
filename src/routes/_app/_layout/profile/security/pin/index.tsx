import { SecurityPin } from '@/pages/SecurityPin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/profile/security/pin/')({
  component: () => <SecurityPin />,
})
