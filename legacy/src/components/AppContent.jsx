import { useState } from "react";
import BackToTop from "./BackToTop.jsx";
import Banner from "./Banner.jsx";
import Bio from "./Bio.jsx";
import Footer from "./Footer.jsx";
import NavigationBar from "./NavigationBar.jsx";
import Projects from "./Projects.jsx";
import Publications from "./Publications.jsx";
import Selector from "./Selector.jsx";
import { ThemeContext } from "./../contexts/theme-context.js";


export default function AppContent() {
    const [selection, setSelection] = useState("projects");
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const getTheme = () => {
        if (darkMode) return "dark";
        else return "light";
    };

    return (
        <ThemeContext.Provider value={{ darkMode }}>
            <div className="App" id={getTheme()}>
                <NavigationBar
                    setSelection={setSelection}
                    toggleDarkMode={toggleDarkMode}
                />
                <div className="container">
                    <Banner />
                    <Bio />
                    <Selector
                        selection={selection}
                        setSelection={setSelection}
                    />
                    {selection === "projects" && <Projects />}
                    {selection === "publications" && <Publications />}
                    <BackToTop />
                    <Footer />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
