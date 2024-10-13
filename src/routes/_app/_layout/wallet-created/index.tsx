import { WalletCreate } from '@/pages/walletCreate'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet-created/')({
  component: () => <WalletCreate />,
})
