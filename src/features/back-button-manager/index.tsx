import { useTelegram } from "@/app/providers/telegram";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export const BackButtonManager = () => {
  const { webApp } = useTelegram();
  const location = useLocation().pathname;

  useEffect(() => {
    if (webApp) {
      const backButton = webApp.BackButton;

      if (backButton) {
        const hiddenButtonPaths = [
          "/login", "/forgot", "/forgot/new-pin", "/wallet", 
          "/seed-phrase", "/seed-phrase/pin", "/registration-pin", 
          "/phone", "/phone-code", "/wallet-created"
        ];

        const updateBackButtonVisibility = () => {
          if (hiddenButtonPaths.includes(location)) {
            backButton.hide();
            console.log("hide:", location);
          } else {
            backButton.show();
            console.log("show", location);
          }
        };

        updateBackButtonVisibility();

        backButton.onClick = () => {
          window.history.back();
        };
      }
    }
  }, [webApp, location]);

  return null;
};
