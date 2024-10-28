import { useTelegram } from "@/app/providers/telegram";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export const BackButtonManager = () => {
  const { webApp } = useTelegram();
  const location = useLocation();

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
        "/wallet-created",
      ];

      if (hiddenBackButtonRoutes.includes(location.pathname)) {
        backButton.hide();
      } else {
        backButton.show();
      }
    }
  }, [webApp, location.pathname]);

  return null;
};
