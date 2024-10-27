import React from 'react'

export const ProfileTitle = ({ title, children, cl }: { title: string, children: React.ReactNode, cl?: string }) => {
  return (
    <div className={cl ? cl : ''}>
      <h2 className="font-bold text-white text-xl">{title}</h2>
      <p className="text-sm text-swiper-text leading-[1.5]">{children}</p>
    </div>
  )
}
