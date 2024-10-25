import { HotTokens } from '@/pages/hotTokens'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/hot-tokens/')({
  component: () => <HotTokens />,
})
