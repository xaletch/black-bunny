import { Send } from '@/pages/send'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/send/')({
  component: () => <Send />,
})
