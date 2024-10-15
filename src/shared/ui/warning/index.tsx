import { WarningIcon } from "@/shared/icons/WarningIcon"

export const Warning = ({ text }: { text: string }) => {
  return (
    <div className="w-full bg-red_error rounded-xl border border-warning-border">
      <div className="p-2 flex items-center gap-2">
        <span className="flex"><WarningIcon /></span>
        <p className="text-sm text-white">{text}</p>
      </div>
    </div>
  )
}
