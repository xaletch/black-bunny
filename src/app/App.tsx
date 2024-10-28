import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useEffect } from "react";
import { useTelegram } from "./providers/telegram";
import { useTelegramBackButton } from "@/shared/hooks/useTelegramBackButton";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { webApp } = useTelegram();

  useEffect(() => {
    webApp?.expand();
    if (webApp) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useTelegramBackButton(webApp);
    }
  }, [webApp]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
