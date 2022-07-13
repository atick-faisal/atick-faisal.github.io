import Banner from "./components/banner";
import NavigationBar from "./components/navbar";
import Projects from "./components/projects";
import Publications from "./components/publications";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Banner />
                <Projects />
                <Publications />
            </div>
        </div>
    );
}

export default App;
