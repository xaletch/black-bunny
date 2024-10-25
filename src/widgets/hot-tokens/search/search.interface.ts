export interface SearchProp {
  onClick: () => void;
  onChange: (value: string) => void;
  value: string;
  isSearch: boolean;
  close: () => void;
}