import { FC, PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'
import { ThemeProvider } from './theme/Theme.provider'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';
import { CurrentPathProvider } from '@/contexts/current-path';


export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CurrentPathProvider>
      <ReactNotifications />
      <TelegramProvider>
        <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
          {children}
        </ThemeProvider>
      </TelegramProvider>
    </CurrentPathProvider>
  )
}
