import { Wallet } from '@/pages/wallet'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/')({
  component: () => <Wallet />,
})
