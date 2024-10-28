import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IWebApp, ITelegramUser } from "./telegram.types";
import { useLocation } from "@tanstack/react-router"


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

  const location = useLocation();

  const hiddenButtonRoutes = [
    "/login",
    "/forgot",
    "/forgot/new-pin",
    "/wallet",
    "/seed-phrase",
    "/seed-phrase/pin",
    "/registration-pin",
    "/phone",
    "/phone-code",
    "/wallet-created"
  ];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);

      const backButton = app.BackButton;

      if (hiddenButtonRoutes.includes(location.pathname)) {
        backButton.hide();
      } else {
        backButton.show();
      }

      backButton.onClick(() => {
        window.history.back();
      });

      return () => {
        backButton.offClick();
        backButton.hide();
      };
    }
  }, [location]);

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