import { SiGooglescholar } from "react-icons/si";
import {
    AiFillMail,
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
} from "react-icons/ai";
import { Button, Card } from "reactstrap";

export default function Footer() {
    return (
        <Card className="footer">
            <p className="name">Contact Me</p>
            <div className="social">
                <Button color="dark" href="#">
                    <AiFillMail className="icon" />
                </Button>
                <Button color="dark" href="#">
                    <AiFillGithub className="icon" />
                </Button>
                <Button color="dark" href="#">
                    <AiFillLinkedin className="icon" />
                </Button>
                <Button color="dark" href="#">
                    <SiGooglescholar className="icon" />
                </Button>
                <Button color="dark" href="#">
                    <AiFillFacebook className="icon" />
                </Button>
            </div>
            <br></br>
            <p>Atick Faisal, 2022</p>
            <a href="https://">Source Code</a>
        </Card>
    );
}
