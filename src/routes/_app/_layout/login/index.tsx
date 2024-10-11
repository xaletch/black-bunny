import { Login } from '@/pages/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/login/')({
  component: () => <Login />,
})
