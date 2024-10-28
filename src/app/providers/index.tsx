import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { TelegramProvider } from './telegram'
import { ThemeProvider } from './theme/Theme.provider'
import { ReactNotifications } from 'react-notifications-component'
import { useLocation } from "@tanstack/react-router"
import 'react-notifications-component/dist/theme.css';


export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <ReactNotifications />
      <TelegramProvider currentPath={currentPath}>
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
          {children}
        </ThemeProvider>
      </TelegramProvider>
    </>
  )
}
