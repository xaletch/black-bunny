import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { IWebApp } from "@/app/providers/telegram/telegram.types";

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

    const manageBackButton = () => {
      if (noBackButtonRoutes.includes(location.pathname)) {
        backButton.hide();
      } else {
        backButton.show();
      }
    };

    manageBackButton();

    const handleBackButtonClick = () => {
      window.history.back();
    };

    backButton.onClick = handleBackButtonClick;

    return () => {
      backButton.onClick?.();
      backButton.hide();
    };
  }, [webApp, location.pathname]);
};
