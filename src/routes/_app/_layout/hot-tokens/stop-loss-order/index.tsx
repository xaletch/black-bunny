import { StopLossOrder } from '@/pages/hot-tokens/sell/stop-loss-order'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/_layout/hot-tokens/stop-loss-order/',
)({
  component: () => <StopLossOrder />,
})
