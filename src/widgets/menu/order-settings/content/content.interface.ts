/* eslint-disable @typescript-eslint/no-explicit-any */
export interface OrderSettingContentProps {
  label: string;
  value: string;
  onChange: (e: string) => void;
  name: string;
  isChecked: boolean;
  handleChecked: () => void;
  isTooltip: boolean;
  onTooltip: () => void;
  popupRef: any;
}