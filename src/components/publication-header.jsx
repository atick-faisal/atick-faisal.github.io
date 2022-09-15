import { useContext } from "react";
import { Button } from "reactstrap";
import { SiGooglescholar } from "react-icons/si";
import quLight from "../assets/qu.jpg";
import quDark from "../assets/qu-dark.jpg";
import bgLight from "../assets/publication-header.png";
import bgDark from "../assets/publication-header-dark.jpg";

import { ThemeContext } from "../contexts/theme-context";

export default function PublicationHeader() {
    const { darkMode } = useContext(ThemeContext);

    const getBackground = () => {
        return darkMode ? bgDark : bgLight;
    };

    const getQu = () => {
        return darkMode ? quDark : quLight;
    };

    return (
        <div
            className="header-card publication-header"
            style={{ backgroundImage: `url(${getBackground()})` }}
        >
            <div className="description">
                <h1>Publications</h1>
                <p>
                    I have been working in the Qatar University Machine Learning
                    Group since 2020. There I worked on multiple Gait Analysis
                    problems such as Neurodegenerative Diseases (NDD) detection
                    from the Ground Reaction Force (GRF) and analyzing the
                    effect of Tai Chi exercise on walking gait. I have proposed
                    a low-cost alternative for accurately measuring GRF and
                    Moment signals from walking kinematics.
                </p>
                <Button
                    color={darkMode ? "primary-dark" : "primary"}
                    href="https://scholar.google.com/citations?hl=en&user=ZiPKjAgAAAAJ/"
                >
                    <div className="btn-content">
                        <SiGooglescholar size="1.2rem" className="icon" />
                        <div>Google Scholar</div>
                    </div>
                </Button>
            </div>
            <div>
                <img className="image" src={getQu()} alt="profile pic" />
            </div>
        </div>
    );
}
