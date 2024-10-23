import { FC } from 'react'
import { MiniCardProps } from './index.interface'

export const MiniCard: FC<MiniCardProps> = ({ icon, onClick, children }) => {
  return (
  <div className="w-full h-14 bg-secondary-100 rounded-2xl" onClick={onClick}>
    <div className="px-3 py-2 h-full flex items-center gap-3">
      <div className='w-10 h-10 rounded-full'>
        {typeof(icon) === 'string' ? <img src={icon} alt='icon' /> : icon}
      </div>
      <div className='flex flex-1'>{children}</div>
    </div>
  </div>
  )
}
