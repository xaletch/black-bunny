import { useTimer } from "@/shared/hooks/useTimer";

export const ResendCode = () => {
  const { min, sec, isCompleted } = useTimer();

  const resendCode = () => {
    console.log('resend code')
  }

  return (
    <div className="mt-4 flex justify-center">
      {!isCompleted ?
       <p className="text-center text-xs text-hover_stroke">Resend code <span>{min}:{sec}</span></p> : 
       <button className="text-center text-xs text-white" onClick={resendCode}>Resend Code</button>
      }
    </div>
  )
}
