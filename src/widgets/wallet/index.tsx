import { Wrapper } from "@/templates/wrapper";
import { WalletHead } from "./head";
import { BalanceCard } from "@/features/wallet/dashboard";
import { WalletSlider } from "@/features/wallet/slider";
import { WalletCategory } from "@/features/wallet/dashboard/category";

export const WalletContent = () => {
  return (
    <Wrapper cl={"pt-4 flex flex-col flex-1"}>
      <WalletHead />
      <BalanceCard />
      <WalletSlider />
      <WalletCategory />
    </Wrapper>
  )
}
