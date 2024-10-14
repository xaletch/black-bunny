import { SelectAccount } from "@/features/account"
import { ChoiceBlockchain } from "@/shared/ui/choiceBlockchain"

export const WalletHead = ({ open, select }: { open: () => void; select: string }) => {
  return (
    <div className="flex items-center justify-between">
      <SelectAccount />
      <ChoiceBlockchain select={select} open={open} />
    </div>
  )
}
