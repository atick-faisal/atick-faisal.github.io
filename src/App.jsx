import Banner from "./components/banner";
import Item from "./components/item";
// import { Card } from "reactstrap";
import NavigationBar from "./components/navbar";

import img from "./assets/ml.gif";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Banner />
                <Item
                    img={img}
                    title="Machine Learning Algorithms"
                    description="Implementation of common machine learning algorithms in MATLAB, Javascript and Python."
                    btnText="Demo on Web"
                    link="#"
                />
            </div>
        </div>
    );
}

export default App;
