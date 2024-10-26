export interface AboutLeaguesItemProps {
  icon: string | JSX.Element;
  name: string;
  bonus: number;
  status: string;
  handleClick: () => void;
}