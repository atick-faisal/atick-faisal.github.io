import { useState } from "react";
import BackToTop from "./components/back-to-top";
import Banner from "./components/banner";
import Bio from "./components/bio";
import Footer from "./components/footer";
import NavigationBar from "./components/navbar";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Selector from "./components/selector";
import { ThemeContext } from "./contexts/theme-context";

function App() {
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

export default App;
