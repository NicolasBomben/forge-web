import { useContext  } from "react";
import { ThemeContext, type ThemeContextValue } from "../context/theme-context";

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  // Consumers already destructure the value, so a missing provider would crash anyway.
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
