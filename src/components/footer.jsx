import { useContext } from "react";
import { Button, Card } from "reactstrap";
import { SiGooglescholar } from "react-icons/si";
import {
    AiFillMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
} from "react-icons/ai";

import { ThemeContext } from "../contexts/theme-context";

export default function Footer() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Card
            className="header-card footer"
            color={darkMode ? "surface-dark" : "surface"}
        >
            <h3 id="contacts">Contacts</h3>
            <div className="social">
                <Button
                    color={darkMode ? "darker" : "dark"}
                    href="mailto:atickfaisal@gmail.com"
                >
                    <AiFillMail className="icon" />
                </Button>
                <Button
                    color={darkMode ? "darker" : "dark"}
                    href="https://github.com/atick-faisal/"
                >
                    <AiFillGithub className="icon" />
                </Button>
                <Button
                    color={darkMode ? "darker" : "dark"}
                    href="https://linkedin.com/in/atick-faisal/"
                >
                    <AiFillLinkedin className="icon" />
                </Button>
                <Button
                    color={darkMode ? "darker" : "dark"}
                    href="https://scholar.google.com/citations?user=ZiPKjAgAAAAJ&hl=en/"
                >
                    <SiGooglescholar className="icon" />
                </Button>
                <Button
                    color={darkMode ? "darker" : "dark"}
                    href="https://www.facebook.com/atick.faisal.52"
                >
                    <AiFillFacebook className="icon" />
                </Button>
            </div>
            <br></br>
            <p>Atick Faisal, 2022</p>
            <a
                className="source-code"
                href="https://github.com/atick-faisal/atick-faisal.github.io"
            >
                {"< source code />"}
            </a>
        </Card>
    );
}
