import { IWebApp } from "@/app/providers/telegram/telegram.types";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";// Убедитесь, что путь правильный

export const useTelegramBackButton = (webApp: IWebApp | null) => {
  const location = useLocation();

  useEffect(() => {
    if (!webApp) return;

    const backButton = webApp.BackButton;

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

    const shouldShowBackButton = !noBackButtonRoutes.includes(location.pathname);
    
    if (shouldShowBackButton) {
      backButton.show();
      backButton.onClick = () => {
        window.history.back();
      };
    } else {
      backButton.hide();
    }

    return () => {
      backButton.hide();
    };
  }, [webApp, location.pathname]);
};
