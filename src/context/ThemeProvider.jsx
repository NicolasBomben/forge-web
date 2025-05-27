import { useState, useEffect } from "react";
import { ThemeContext } from "./theme-context";

import PropTypes from "prop-types";

export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState("dark");

    //detectar tema principal en localStorage y preferencias.
    useEffect(() => {

        const savedTheme = localStorage.getItem("theme");

        if(savedTheme){
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initialTheme = prefersDark ? "dark" : "light";
            setTheme(initialTheme);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    //aplicar cambios y guardar en localStorage
    useEffect(() => {

        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (

        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
