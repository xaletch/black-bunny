import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IWebApp, ITelegramUser } from "./telegram.types";
import { useCurrentPath } from "@/contexts/current-path";
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

  const { currentPath } = useCurrentPath();

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

      console.log('currentPath: ', currentPath);

      if (noBackButtonRoutes.includes(currentPath)) {
        console.log('currentPath include: ', currentPath);
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