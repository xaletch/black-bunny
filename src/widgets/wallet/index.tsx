import { Wrapper } from "@/templates/wrapper";
import { WalletHead } from "./head";
import { BalanceCard } from "@/features/wallet/dashboard";
import { WalletSlider } from "@/features/wallet/slider";
import { WalletCategory } from "@/features/wallet/category";
import { Networks } from "@/features/wallet/networks";
import { BackgroundBlur } from "@/templates/blurBg";
import { useState } from "react";

export const WalletContent = () => {
  const [chooseCategory, setChooseCategory] = useState<boolean>(false);
  const [selectNetwork, setSelectNetwork] = useState<string>("All Chains");

  return (
    <Wrapper cl={"pt-4 pb-16 flex flex-col flex-1"}>
      <WalletHead select={selectNetwork} open={() => setChooseCategory(true)}/>
      <BalanceCard />
      <WalletSlider />
      <WalletCategory />
      {chooseCategory && (
        <BackgroundBlur close={() => setChooseCategory(false)}>
          <div
            className={`absolute bottom-0 left-0 right-0 transition-transform duration-1000 ease-out transform ${
              chooseCategory ? "translate-y-0" : "translate-y-full duration-1000"
            }`}
          >
            <Networks select={selectNetwork} handleSelect={setSelectNetwork} close={() => setChooseCategory(false)} />
          </div>
        </BackgroundBlur>
      )}
    </Wrapper>
  )
}
