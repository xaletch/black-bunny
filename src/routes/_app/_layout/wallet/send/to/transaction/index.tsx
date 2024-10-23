import { Transaction } from '@/pages/transaction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/_layout/wallet/send/to/transaction/',
)({
  component: () => <Transaction />,
})
