import Banner from "./components/banner";
import Bio from "./components/bio";
import NavigationBar from "./components/navbar";
import ProjectHeader from "./components/project-header";
import Projects from "./components/projects";
import PublicationHeader from "./components/publication-header";
import Publications from "./components/publications";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Banner />
                <Bio />
                <ProjectHeader />
                <Projects />
                <PublicationHeader />
                <Publications />
            </div>
        </div>
    );
}

export default App;
