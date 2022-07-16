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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
