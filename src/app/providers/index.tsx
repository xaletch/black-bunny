import { FC, PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'
import { ThemeProvider } from './theme/Theme.provider'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TelegramProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </TelegramProvider>
  )
}
