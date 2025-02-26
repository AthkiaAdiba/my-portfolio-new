"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure theme is set properly after hydration
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Avoid hydration mismatch by rendering only after mounting
  if (!mounted) return null;

  return (
    <span onClick={toggleTheme} className="text-3xl">
      {theme === "dark" ? (
        <CiLight className="dark:text-white" />
      ) : (
        <MdOutlineDarkMode />
      )}
    </span>
  );
}
