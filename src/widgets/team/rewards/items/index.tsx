import { FC, PropsWithChildren } from 'react'

export const RewardsItemWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mt-4'>
      <div className='flex flex-col gap-3'>{children}</div>
    </div>
  )
}
