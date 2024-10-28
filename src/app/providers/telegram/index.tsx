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
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
    }
  }, []);

  useEffect(() => {
    if (webApp) {
      const backButton = webApp.BackButton;
      const hiddenBackButtonRoutes = [
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

      if (hiddenBackButtonRoutes.includes(currentPath)) {
        backButton.hide();
      } else {
        backButton.show();
      }
    }
  }, [webApp, currentPath]);

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