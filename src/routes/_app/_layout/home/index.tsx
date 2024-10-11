import { Home } from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/home/')({
  component: () => <Home />,
})
