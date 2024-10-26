import React from 'react'

export const ProfileTitle = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="font-bold text-white text-xl">{title}</h2>
      <p className="text-sm text-swiper-text leading-[1.5]">{children}</p>
    </div>
  )
}
