import { WalletInfo } from '@/pages/walletInfo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/$/id')({
  component: () => <WalletInfo />,
})
