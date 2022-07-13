import Banner from "./components/banner";
import NavigationBar from "./components/navbar";
import Projects from "./components/projects";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Banner />
                <Projects />
            </div>
        </div>
    );
}

export default App;
