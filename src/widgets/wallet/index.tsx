import { Wrapper } from "@/templates/wrapper";
import { WalletBalance } from "./balance";
import { WalletHead } from "./head";
import { WalletSlider } from "./slider";

export const WalletContent = () => {
  return (
    <Wrapper cl={"pt-4 flex flex-col flex-1"}>
      <WalletHead />
      <WalletBalance />
      <WalletSlider />
    </Wrapper>
  )
}
