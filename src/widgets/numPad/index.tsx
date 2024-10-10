import { KeyItem } from "@/shared/ui/keys"

const nubPadKeys = [
  {
    keys: "1",
    color: "default"
  },
  {
    keys: "2",
    color: "default"
  },
  {
    keys: "3",
    color: "default"
  },
  {
    keys: "4",
    color: "default"
  },
  {
    keys: "5",
    color: "default"
  },
  {
    keys: "6",
    color: "default"
  },
  {
    keys: "7",
    color: "default"
  },
  {
    keys: "8",
    color: "default"
  },
  {
    keys: "9",
    color: "default"
  },
  {
    keys: "Clear",
    color: "default"
  },
  {
    keys: "0",
    color: "default"
  },
  {
    keys: "Delete",
    color: "red"
  },
]

export const NumPad = ({ setKeys }: { setKeys: (key: string) => void }) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 gap-2">
        {nubPadKeys.map((obj, index) => (
          <KeyItem {...obj} key={index} onClick={() => setKeys(obj.keys)} />
        ))}
      </div>
    </div>
  )
}
