import { WalletToken } from '@/pages/walletToken'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/token/$/id')({
  component: () => <WalletToken />,
})
