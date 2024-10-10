import { RegistrationPin } from '@/pages/registrationPin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/registration-pin/')({
  component: () => <RegistrationPin />,
})
