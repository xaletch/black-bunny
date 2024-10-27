import { TradeWallets } from '@/pages/tradeWallets'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/trade/wallets/')({
  component: () => <TradeWallets />,
})
