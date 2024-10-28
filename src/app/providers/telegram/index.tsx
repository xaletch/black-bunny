import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IWebApp, ITelegramUser } from "./telegram.types";

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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);

      const manageBackButton = () => {
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

        const currentPath = window.location.pathname;
        if (noBackButtonRoutes.includes(currentPath)) {
          app.BackButton.hide();
        } else {
          app.BackButton.show();
        }
      }

      manageBackButton();

      const handlePopState = () => {
        manageBackButton();
      };
      window.addEventListener("popstate", handlePopState);

      app.BackButton.onClick = () => {
        window.history.back();
      };

      return () => {
        window.removeEventListener("popstate", handlePopState);
        app.BackButton.offClick();
      };
    }
  }, []);

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