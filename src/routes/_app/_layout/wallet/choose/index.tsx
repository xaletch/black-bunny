import { ChooseWallet } from '@/pages/chooseWallet'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/wallet/choose/')({
  component: () => <ChooseWallet />,
})
