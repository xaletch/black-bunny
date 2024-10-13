import { ReactElement } from "react";

export interface LoginTitleProps {
  icon: string | ReactElement;
  title: string;
  text: string;
  color?: string;
  cl?: string
}