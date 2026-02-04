import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // reads local variable "theme" and sets the theme on load
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }
        else {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark");
        }
    })

    // the button that changes the theme
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light") // stores theme in a localvariable
            setIsDarkMode(false);
        } 
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark") // stores theme in a local variable
            setIsDarkMode(true);
        }
    }

    // returns button gui
    return (
        <button 
          onClick={toggleTheme} 
          className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
          )}
        >
            {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />

            ) : (
            <Moon className="h-6 w-6 text-blue-900" />
            ) } 
        </button>
    );
}