export interface PhraseProps {
  phrase: string;
  numeric: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHide: boolean
}