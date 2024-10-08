import { FC, PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TelegramProvider>
      {children}
    </TelegramProvider>
  )
}
