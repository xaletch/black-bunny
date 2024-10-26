import { ReactNode } from "react";

export interface SettingItemProps {
  children: ReactNode;
  name: string;
  link: string;
  isLine?: boolean;
}