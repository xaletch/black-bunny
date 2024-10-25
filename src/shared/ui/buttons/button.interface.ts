export interface ButtonProps {
  text: string;
  icon?: string | JSX.Element;
  onClick: () => void;
  color?: string;
  icon_cl?: string;
  cl?: string;
}