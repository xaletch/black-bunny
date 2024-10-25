import { ReactNode } from "react"

export interface ConfirmationMenuProps {
  children: ReactNode;
  close: () => void;
  isFinish?: boolean;
  h?: string;
}