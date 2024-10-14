export interface ICategoryItem {
  name: string;
  type?: string;
  select: string;
  link?: string;
  onSelect: () => void;
}