import { MarketOrder } from '@/pages/hot-tokens/buy/MarketOrder'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/hot-tokens/market-order/')({
  component: () => <MarketOrder />,
})