export interface BonusItems {
  invited_you: string;
  invited_team: string;
  bonus: string;
}

export interface ItemLeagueMenuProps {
  close: () => void;
  type: string;
  start: string;
  end: string;
  total: number;
  icon: string | JSX.Element;
  name: string;
  turnover: string;
  bonus_list: BonusItems[]
}