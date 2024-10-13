import { SelectAccount } from "@/features/account"
import { ChoiceBlockchain } from "@/shared/ui/choiceBlockchain"

export const WalletHead = () => {
  return (
    <div className="flex items-center justify-between">
      <SelectAccount />
      <ChoiceBlockchain select={"All Chains"} />
    </div>
  )
}
