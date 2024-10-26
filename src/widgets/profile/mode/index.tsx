import { useTheme } from "@/app/providers/theme/Theme.provider";
import { Checkbox } from "@/shared/ui/checkbox"

export const ProfileMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center justify-between">
      <p className="text-base text-white font-bold">Dark Mode</p>
      <Checkbox toggle={toggleTheme} checked={theme === 'dark'} />
    </div>
  )
}
