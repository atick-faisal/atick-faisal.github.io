import { useContext } from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from "reactstrap";

import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { DiGitBranch } from "react-icons/di";

import { ThemeContext } from "../contexts/theme-context";

const images = import.meta.glob("../assets/*", {eager: true});

export default function ProjectItem({
    image,
    title,
    description,
    github,
    web,
    download,
    use,
    youtube,
}) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Card color={darkMode ? "surface-dark" : "surface"}>
            <CardImg
                className="card-img"
                src={images[`../assets/${image}`].default}
                alt={title}
            />
            <CardBody className="card-body">
                <CardTitle tag="h2">{title}</CardTitle>
                <CardText>{description}</CardText>
                <div className="actions">
                    {download && (
                        <Button
                            color={darkMode ? "danger-dark" : "danger"}
                            href={download}
                        >
                            <div className="btn-content">
                                <BiDownload size="1.2rem" className="icon" />
                                <b>Download</b>
                            </div>
                        </Button>
                    )}
                    {web && (
                        <Button
                            color={darkMode ? "primary-dark" : "primary"}
                            href={web}
                        >
                            <div className="btn-content">
                                <TbWorld size="1.2rem" className="icon" />
                                Web Demo
                            </div>
                        </Button>
                    )}
                    {use && (
                        <Button
                            color={darkMode ? "secondary-dark" : "secondary"}
                            href={use}
                        >
                            <div className="btn-content">
                                <DiGitBranch size="1.2rem" className="icon" />
                                <b>Use This</b>
                            </div>
                        </Button>
                    )}
                    {youtube && (
                        <Button
                            color={darkMode ? "danger-dark" : "danger"}
                            href={youtube}
                        >
                            <div className="btn-content">
                                <AiFillYoutube size="1.2rem" className="icon" />
                                YouTube Demo
                            </div>
                        </Button>
                    )}
                    {github && (
                        <Button
                            color={darkMode ? "darker" : "dark"}
                            href={github}
                        >
                            <div className="btn-content">
                                <AiFillGithub size="1.2rem" className="icon" />
                                GitHub
                            </div>
                        </Button>
                    )}
                </div>
            </CardBody>
        </Card>
    );
}
