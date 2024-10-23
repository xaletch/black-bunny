import { SendContent } from "@/widgets/send";
import { InsufficientContent } from "@/widgets/send/Insufficient";


export const Send = () => {
  const isEmpty = false;
  return (
    <>
      {isEmpty ? <InsufficientContent /> : <SendContent/>}
    </>
  )
}
