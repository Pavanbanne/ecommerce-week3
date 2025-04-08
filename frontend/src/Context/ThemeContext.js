import React, { createContext, useContext, useState, useEffect } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state from localStorage
    try {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false; // Default to light mode if parsing fails
    }
  });

  useEffect(() => {
    // Apply the dark or light class to the body
    document.body.classList.remove("light", "dark");
    document.body.classList.add(darkMode ? "dark" : "light");

    // Save the darkMode state to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;