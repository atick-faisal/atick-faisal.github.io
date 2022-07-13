import Butterfly from "./components/butterfly";
// import { Card } from "reactstrap";
import NavigationBar from "./components/navbar";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Butterfly />
            </div>
        </div>
    );
}

export default App;
