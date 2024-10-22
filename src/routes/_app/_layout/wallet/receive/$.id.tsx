import { WalletReceive } from '@/pages/walletReceive'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/receive/$/id')({
  component: () => <WalletReceive />,
})
