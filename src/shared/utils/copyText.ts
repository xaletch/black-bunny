import { notify } from "@/widgets/notification";

function CopyText(text: string) {
  navigator.clipboard.writeText(text);
  console.log(text);

  notify();
}

export default CopyText