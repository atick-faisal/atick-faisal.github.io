import { Button } from "reactstrap";
import { AiFillGithub } from "react-icons/ai";
import raspberryPi from "../assets/raspberry-pi.png";

export default function ProjectHeader() {
    return (
        <div className="header-card project-header">
            <div className="description">
                <h1>Projects</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <Button color="dark" href="https://github.com/atick-faisal/">
                    <div className="btn-content">
                        <AiFillGithub size="1.2rem" className="icon" />
                        Explore on GitHub
                    </div>
                </Button>
            </div>
            <div>
                <img src={raspberryPi} alt="profile pic" />
            </div>
        </div>
    );
}
