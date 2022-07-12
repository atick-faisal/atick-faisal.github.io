import Butterfly from "./components/butterfly";
import { Card } from "reactstrap";

function App() {
    return (
        <div className="App">
            <Card className="banner">
                <Butterfly />
            </Card>
        </div>
    );
}

export default App;
