import { Forgot } from '@/pages/forgot'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/forgot/')({
  component: () => <Forgot />,
})
