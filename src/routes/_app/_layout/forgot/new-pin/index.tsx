import { NewPin } from '@/pages/newPin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/forgot/new-pin/')({
  component: () => <NewPin />,
})
