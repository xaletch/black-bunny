import { FC, PropsWithChildren } from 'react'
import { TelegramProvider } from './telegram'
import { ThemeProvider } from './theme/Theme.provider'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';


export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ReactNotifications />
      <TelegramProvider >
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
          {children}
        </ThemeProvider>
      </TelegramProvider>
    </>
  )
}
