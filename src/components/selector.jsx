import { useContext } from "react";
import { Button } from "reactstrap";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

import { ThemeContext } from "../contexts/theme-context";

export default function Selector({ selection, setSelection }) {
    const { darkMode } = useContext(ThemeContext);

    const getColor = (item) => {
        if (selection === item) return "primary-variant";
        else return darkMode ? "darker" : "lighter";
    };

    return (
        <div id="selector" className="selector">
            <div className="items">
                <Button
                    color={getColor("projects")}
                    onClick={() => {
                        setSelection("projects");
                    }}
                >
                    <div className="btn-content">
                        <MdOutlineDesignServices
                            size="1.2rem"
                            className="icon"
                        />
                        Projects
                    </div>
                </Button>
                <Button
                    color={getColor("publications")}
                    onClick={() => {
                        setSelection("publications");
                    }}
                >
                    <div className="btn-content">
                        <BsFillJournalBookmarkFill
                            size="1.2rem"
                            className="icon"
                        />
                        Publications
                    </div>
                </Button>
            </div>
            <hr></hr>
        </div>
    );
}
