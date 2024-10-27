import { TradeToken } from '@/pages/TradeToken'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/trade/token/$/id')({
  component: () => <TradeToken />,
})
