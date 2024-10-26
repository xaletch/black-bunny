import { Language } from '@/pages/Language'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/profile/language/')({
  component: () => <Language />,
})
