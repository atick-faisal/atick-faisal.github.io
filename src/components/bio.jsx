import { Button } from "reactstrap";
import profilePic from "../assets/atick-alt.png";

export default function Bio() {
    return (
        <div className="bio">
            <div className="text">
                <h1>
                    Hello! I'm <br />
                    <b>Atick</b> Faisal
                </h1>
                <p>
                    Machine Learning Researcher, Robotic Enthusiast and Software
                    Developer. Currently working as a Research Assistant at
                    Qatar University
                </p>
                <Button color="primary">Get in Touch</Button>
            </div>
            <div className="image">
                <img className="flip" src={profilePic} alt="profile pic" />
            </div>
        </div>
    );
}
