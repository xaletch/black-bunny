import { LimitOrder } from '@/pages/hot-tokens/buy/LimitOrder'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/hot-tokens/limit-order/')({
  component: () => <LimitOrder />,
})
