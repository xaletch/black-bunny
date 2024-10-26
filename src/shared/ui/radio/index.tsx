import { FC } from "react";
import { RadioProps } from "./radio.interface";

export const Radio:FC<RadioProps> = ({ selected, handleClick }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`relative w-5 h-5 cursor-pointer rounded-full border-[1px] ${selected ? 'border-button' : 'border-bg-checkbox'}`}
        onClick={handleClick}
      >
        <div
          className={`absolute inset-0 m-auto w-[10px] h-[10px] rounded-full transition ${
            selected ? 'bg-pink-500' : 'bg-transparent'
          }`}
        ></div>
      </div>
    </div>
  );
}
