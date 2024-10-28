import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IWebApp, ITelegramUser } from "./telegram.types";
// import { useLocation } from "@tanstack/react-router"

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}
export const TelegramContext = createContext<ITelegramContext>({});
export const useTelegram = () => useContext(TelegramContext);
export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const noBackButtonRoutes = [
    "/login",
    "/forgot",
    "/forgot/new-pin",
    "/wallet",
    "/seed-phrase",
    "/seed-phrase/pin",
    "/registration-pin",
    "/phone",
    "/phone-code",
    "/wallet-created",
  ];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);

      const backButton = app.BackButton;

      const updatePath = () => {
        const newPath = window.location.pathname;
        console.log('new path: ', newPath);
        setCurrentPath(newPath);
        if (noBackButtonRoutes.includes(newPath)) {
          backButton.hide();
        } else {
          backButton.show();
        }
      };

      updatePath();

      window.addEventListener('popstate', updatePath);

      backButton.onClick(() => {
        window.history.back();
      });

      return () => {
        backButton.hide();
        window.removeEventListener('popstate', updatePath);
      };
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
          currentPath
        }
      : {};
  }, [webApp, currentPath]);

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};