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
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

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

  // const updatePath = (newPath: string) => {
  //   setCurrentPath(newPath);
    
  //   if (noBackButtonRoutes.includes(newPath)) {
  //     webApp?.BackButton.hide();
  //   } else {
  //     webApp?.BackButton.show();
  //   }
  // };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);

      const backButton = app.BackButton;

      if (noBackButtonRoutes.includes(currentPath)) {
        backButton.hide();
      } else {
        backButton.show();
      }

      backButton.onClick(() => {
        window.history.back();
      });

      return () => {
        backButton.hide();
      };
    }
  }, [currentPath]);

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