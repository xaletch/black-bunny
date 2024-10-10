import { ConnectPhone } from '@/pages/connectPhone'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/phone/')({
  component: () => <ConnectPhone />,
})
