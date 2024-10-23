import { ReactNode } from "react";

export const SendWrapperItems = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div>
      <p className="text-sm text-white font-medium">{name}</p>
      <div className="flex flex-col gap-2 mt-[10px]">
        {children}
      </div>
    </div>
  )
}
