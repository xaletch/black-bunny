import { Customization } from '@/pages/customization'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/profile/customization/')({
  component: () => <Customization />,
})
