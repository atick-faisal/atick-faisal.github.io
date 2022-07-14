import { Button } from "reactstrap";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

export default function Selector({ selection, setSelection }) {
    const getColor = (item) => {
        if (selection === item) return "primary-variant";
        else return "white";
    };

    return (
        <div className="selector">
            <div className="items">
                <Button
                    color={getColor("projects")}
                    onClick={() => {
                        setSelection("projects");
                    }}
                >
                    <div>
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
                    <div>
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
