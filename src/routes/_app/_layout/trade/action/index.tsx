import { TradeAction } from '@/pages/tradeAction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/trade/action/')({
  component: () => <TradeAction />,
})
