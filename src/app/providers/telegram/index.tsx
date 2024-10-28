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
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

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

      if (noBackButtonRoutes.includes(currentRoute)) {
        backButton.hide();
      } else {
        backButton.show();
      }

      backButton.onClick(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setCurrentRoute((prev) => {
          const newHistory = [...history];
          newHistory.pop();

          const lastRoute = newHistory[newHistory.length - 1] || '/';
          setHistory(newHistory);
          return lastRoute;
        });
      });

      return () => {
        backButton.hide();
      };
    }
  }, [currentRoute]);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};