import { FC, PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'
import { ThemeProvider } from './theme/Theme.provider'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TelegramProvider>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        {children}
      </ThemeProvider>
    </TelegramProvider>
  )
}
