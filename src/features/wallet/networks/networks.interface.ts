/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export interface NetworkInterface {
  close: () => void;
  select: string;
  handleSelect: Dispatch<SetStateAction<string>>;
  handleSelectIcon?: Dispatch<SetStateAction<any>>;
}