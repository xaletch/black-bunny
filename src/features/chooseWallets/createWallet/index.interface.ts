import { Dispatch, SetStateAction } from "react";

export interface CreateWalletMenuProps {
  stepCreateWallet: number;
  setStepCreateWallet: Dispatch<SetStateAction<number>>;
  setCreateWallet: Dispatch<SetStateAction<boolean>>;
}