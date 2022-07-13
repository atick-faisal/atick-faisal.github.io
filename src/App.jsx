import Banner from "./components/banner";
import Item from "./components/item";
// import { Card } from "reactstrap";
import NavigationBar from "./components/navbar";

import solar from "./assets/solar.png";
import glove from "./assets/glove.jpg";
import ml from "./assets/ml.gif";
import dashboard from "./assets/dashboard.jpg";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container">
                <Banner />
                <div className="row">
                    <Item
                        img={solar}
                        title="12V Solar Charge Controller"
                        description="A battery charge controller that protects it from overcharging and overdischarging."
                        btnText="More on GitHub"
                        link="#"
                    />
                    <Item
                        img={glove}
                        title="Sign Language Recognition"
                        description="A framework that classifies 24 static and 16 dynamic gestures using Flex and IMU sensors."
                        btnText="More on GitHub"
                        link="#"
                    />
                </div>
                <div className="row">
                    <Item
                        img={ml}
                        title="Machine Learning Algorithms"
                        description="Implementation of common machine learning algorithms in MATLAB, Javascript and Python."
                        btnText="Demo on Web"
                        link="#"
                    />
                    <Item
                        img={dashboard}
                        title="Sensor Data Visualization"
                        description="A full stack web application built using node.js and react.js to visualize sensor data comig from IoT devices."
                        btnText="Demo on Web"
                        link="#"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
