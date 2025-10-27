import { useEffect, useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  return (
    <div className="flex gap-10 items-center p-4">
      {" "}
      Toggle dashboard theme
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded bg-gray-200 dark:bg-gray-700"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
