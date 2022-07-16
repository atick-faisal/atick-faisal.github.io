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
            <h3>Contacts</h3>
            <div className="social">
                <Button color={darkMode ? "darker" : "dark"} href="#">
                    <AiFillMail className="icon" />
                </Button>
                <Button color={darkMode ? "darker" : "dark"} href="#">
                    <AiFillGithub className="icon" />
                </Button>
                <Button color={darkMode ? "darker" : "dark"} href="#">
                    <AiFillLinkedin className="icon" />
                </Button>
                <Button color={darkMode ? "darker" : "dark"} href="#">
                    <SiGooglescholar className="icon" />
                </Button>
                <Button color={darkMode ? "darker" : "dark"} href="#">
                    <AiFillFacebook className="icon" />
                </Button>
            </div>
            <br></br>
            <p>Atick Faisal, 2022</p>
            <a className="source-code" href="https://">
                {"< source code />"}
            </a>
        </Card>
    );
}
