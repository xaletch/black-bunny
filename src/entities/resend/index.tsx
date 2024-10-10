export const ResendCode = ({ min, sec }: { min: string, sec: string }) => {
  return (
    <div className="mt-4">
      <p className="text-center text-xs text-hover_stroke">Resend code <span className="">{min}:{sec}</span></p>
    </div>
  )
}
