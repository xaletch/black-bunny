import { Receive } from '@/widgets/receive'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/receive/$/id')({
  component: () => <Receive/>,
})
