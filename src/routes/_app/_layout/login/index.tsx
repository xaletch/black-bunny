import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/login/')({
  component: () => <div>Login</div>,
})
