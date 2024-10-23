import { ReactNode } from "react";

export interface MiniCardProps {
  icon: string | JSX.Element;
  children: ReactNode;
  onClick: () => void;
}