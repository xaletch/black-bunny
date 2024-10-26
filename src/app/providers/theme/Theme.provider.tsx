// import { createContext, useContext, useEffect, useState } from "react";
// import { useTelegram } from "../telegram";

// type Theme = "dark" | "light" | "system";

// type ThemeProviderProps = {
//   children: React.ReactNode;
//   defaultTheme?: Theme;
//   storageKey?: string;
// };

// type ThemeProviderState = {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// };

// const initialState: ThemeProviderState = {
//   theme: "system",
//   setTheme: () => null,
// };

// const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// export function ThemeProvider({
//   children,
//   defaultTheme = "system",
//   storageKey = "ui-theme",
//   ...props
// }: ThemeProviderProps) {
//     const [theme, setTheme] = useState<Theme>(
//       () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
//     );

//     const { webApp } = useTelegram();

    
//     useEffect(() => {
//       const root = window.document.documentElement;
//       root.classList.remove("light", "dark",);
      
//       if (webApp && webApp.colorScheme) {
//         const initialTheme = webApp.colorScheme === "dark" ? "dark" : "light";
//         setTheme(initialTheme);
        
//         console.log('webApp.colorScheme ', webApp.colorScheme)
//       }
      
//       root.classList.add(theme);
//     }, [webApp, theme]);
    
//     useEffect(() => {
//       localStorage.setItem(storageKey, theme);
//     }, [theme, storageKey]);
    
//     const value = {
//       theme,
//       setTheme,
//     };

//     return (
//       <ThemeProviderContext.Provider {...props} value={value}>
//         {children}
//       </ThemeProviderContext.Provider>
//     );
// }

// export const useTheme = () => {
//     const context = useContext(ThemeProviderContext);

//     if (context === undefined)
//       throw new Error("useTheme must be used within a ThemeProvider");

//     return context;
// };

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark",);

        if (theme === "system") {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
                ? "dark"
                : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
