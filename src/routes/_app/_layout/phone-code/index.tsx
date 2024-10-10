import { PhoneCode } from '@/pages/phoneCode'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/phone-code/')({
  component: () => <PhoneCode />,
})
