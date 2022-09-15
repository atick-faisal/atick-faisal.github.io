import { useContext } from "react";
import { Button } from "reactstrap";
import { AiFillGithub } from "react-icons/ai";
import raspberryPi from "../assets/raspberry-pi-alt.png";
import bgLight from "../assets/project-header.jpg";
import bgDark from "../assets/project-header-dark.jpg";

import { ThemeContext } from "../contexts/theme-context";

export default function ProjectHeader() {
    const { darkMode } = useContext(ThemeContext);

    const getBackground = () => {
        return darkMode ? bgDark : bgLight;
    };

    return (
        <div
            className="header-card project-header"
            style={{ backgroundImage: `url(${getBackground()})` }}
        >
            <div className="description">
                <h1>Projects</h1>
                <p>
                    I am a robotics enthusiast and a native Android developer
                    (Kotlin, Java) with experience in modern architectural
                    components and MVVM design pattern. I have developed several
                    mobile applications to communicate with IoT devices via
                    Bluetooth, BLE, HTTP and MQTT protocols. I also have
                    experience in design and deployment of Machine Learning
                    based solutions for IoT devices.
                </p>
                <Button color="dark" href="https://github.com/atick-faisal/">
                    <div className="btn-content">
                        <AiFillGithub size="1.2rem" className="icon" />
                        Explore on GitHub
                    </div>
                </Button>
            </div>
            <div>
                <img className="image" src={raspberryPi} alt="profile pic" />
            </div>
        </div>
    );
}
