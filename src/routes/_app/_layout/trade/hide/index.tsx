import { TradeHide } from '@/pages/tradeHide'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/trade/hide/')({
  component: () => <TradeHide />,
})
