import { Dispatch, SetStateAction } from "react";

export interface NetworkInterface {
  close: () => void;
  select: string;
  handleSelect: Dispatch<SetStateAction<string>>;
}