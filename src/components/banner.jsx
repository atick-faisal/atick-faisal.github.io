import { useContext } from "react";
import { Button } from "reactstrap";
import Butterfly from "./butterfly";

import { ThemeContext } from "../contexts/theme-context";

export default function Banner() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="banner">
            <Butterfly />
            <br></br>
            <p className="quote">
                Each smallest act of kindness, reverberates across great
                distances and spans of time, affecting lives unknown to the one
                who's generous spirit, was the source of this good echo. Thats
                the beauty of the <b>Butterfly Effect</b>
            </p>
            <div className="actions">
                <Button
                    href="#contacts"
                    outline
                    color={darkMode ? "primary-dark" : "primary"}
                >
                    Contact Me
                </Button>
                <Button color={darkMode ? "primary-dark" : "primary"}>
                    Explore My Works
                </Button>
            </div>
        </div>
    );
}
