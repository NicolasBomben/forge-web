
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
      )}
    </button>
  );
};
