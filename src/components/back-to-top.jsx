import { useContext } from "react";
import { Button } from "reactstrap";
import { BsArrow90DegUp } from "react-icons/bs";

import { ThemeContext } from "../contexts/theme-context";

export default function BackToTop() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Button color={darkMode ? "secondary-dark" : "secondary"} href="#top">
            <div className="btn-content">
                <BsArrow90DegUp size="1.2rem" className="icon" />
                Back to Top
            </div>
        </Button>
    );
}
