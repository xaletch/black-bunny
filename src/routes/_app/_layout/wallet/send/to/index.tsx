import { SendTo } from '@/pages/sendTo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/send/to/')({
  component: () => <SendTo />,
})
