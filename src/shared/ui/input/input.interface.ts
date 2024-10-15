export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: string;
  cl?: string;
  isToken?: boolean;
}