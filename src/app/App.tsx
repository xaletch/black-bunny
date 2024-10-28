import { createRouter, RouterProvider, useLocation } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useEffect } from "react";
import { useTelegram } from "./providers/telegram";
import { useCurrentPath } from "@/contexts/current-path";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { webApp } = useTelegram();
  const location = useLocation();
  const { setCurrentPath } = useCurrentPath();

  useEffect(() => {
    webApp?.expand();
  }, [webApp]);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname, setCurrentPath]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App
