/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CodeInputProps {
  value: string;
  isError: boolean;
  isSecret: boolean;
  isInput: boolean;
  onChange?: (value: any) => void;
  index?: number
}