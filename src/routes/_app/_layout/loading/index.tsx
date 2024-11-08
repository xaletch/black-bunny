import { Loading } from '@/pages/loading'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/loading/')({
  component: () => <Loading/>,
})
