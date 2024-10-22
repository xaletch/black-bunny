import { SelectAccount } from "@/features/account"
import { ChoiceBlockchain } from "@/shared/ui/choiceBlockchain"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WalletHead = ({ open, select, icon }: { open: () => void; select: string, icon?: any }) => {
  return (
    <div className="flex items-center justify-between">
      <SelectAccount />
      <ChoiceBlockchain select={select} open={open} icon={icon} />
    </div>
  )
}
