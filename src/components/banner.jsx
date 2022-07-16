import { Button } from "reactstrap";
import Butterfly from "./butterfly";

export default function Banner() {
    return (
        <div className="banner">
            <Butterfly />
            <br></br>
            <p color="light" className="quote">
                Each smallest act of kindness, reverberates across great
                distances and spans of time, affecting lives unknown to the one
                who's generous spirit, was the source of this good echo. Thats
                the beauty of the <b>Butterfly Effect</b>
            </p>
            <div className="actions">
                <Button outline color="primary">
                    Contact Me
                </Button>
                <Button color="primary">Explore My Works</Button>
            </div>
        </div>
    );
}
