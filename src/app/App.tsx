import { createRouter, RouterProvider, useLocation } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useEffect } from "react";
import { useTelegram } from "./providers/telegram";


const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { webApp } = useTelegram();
  const location = useLocation();

  useEffect(() => {
    webApp?.expand();
  }, [webApp]);

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

  return <RouterProvider router={router} />;
}

export default App
