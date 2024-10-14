import { Dispatch, SetStateAction } from "react";

export interface ICategory {
  category: string[];
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
}