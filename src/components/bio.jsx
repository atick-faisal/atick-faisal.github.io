import { useContext } from "react";
import { Button } from "reactstrap";
import bgLight from "../assets/bio-bg.jpg";
import bgDark from "../assets/bio-bg-dark.jpg";
import profilePic from "../assets/atick-alt.png";

import { ThemeContext } from "../contexts/theme-context";

export default function Bio() {
    const { darkMode } = useContext(ThemeContext);

    const getBackground = () => {
        return darkMode ? bgDark : bgLight;
    };

    return (
        <div
            id="about"
            className="header-card bio"
            style={{ backgroundImage: `url(${getBackground()})` }}
        >
            <div className="description">
                <h1>
                    Hello! I'm <br />
                    <b>Atick</b> Faisal
                </h1>
                <p>
                    Machine Learning Researcher, Robotic Enthusiast and Software
                    Developer. Currently working as a Research Assistant at
                    Qatar University
                </p>
                <Button
                    href="#contacts"
                    color={darkMode ? "primary-dark" : "primary"}
                >
                    Get in Touch
                </Button>
            </div>
            <div>
                <img
                    className="image flip"
                    src={profilePic}
                    alt="profile pic"
                />
            </div>
        </div>
    );
}
