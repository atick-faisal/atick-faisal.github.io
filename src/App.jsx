import Banner from "./components/banner";
// import { Card } from "reactstrap";
import NavigationBar from "./components/navbar";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Banner />
            </div>
        </div>
    );
}

export default App;
