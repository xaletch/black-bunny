import { Trade } from '@/pages/trade'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/trade/')({
  component: () => <Trade />,
})
