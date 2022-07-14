import { useState } from "react";
import Banner from "./components/banner";
import Bio from "./components/bio";
import Footer from "./components/footer";
import NavigationBar from "./components/navbar";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Selector from "./components/selector";

function App() {
    const [selection, setSelection] = useState("projects");

    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Banner />
                <Bio />
                <Selector selection={selection} setSelection={setSelection} />
                {selection === "projects" && <Projects />}
                {selection === "publications" && <Publications />}
                <Footer />
            </div>
        </div>
    );
}

export default App;
