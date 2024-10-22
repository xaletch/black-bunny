import { Dispatch, SetStateAction } from "react";

export interface ImportWalletMenuProps {
  stepImportWallet: number;
  setStepImportWallet: Dispatch<SetStateAction<number>>;
  setImportWallet: Dispatch<SetStateAction<boolean>>;
}