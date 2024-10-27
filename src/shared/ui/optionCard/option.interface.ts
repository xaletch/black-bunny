import { ReactNode } from "react";

export interface OptionCardProps {
  children: ReactNode;
  select: boolean;
  onClick: () => void;
  cl?: string;
  border?: string;
}