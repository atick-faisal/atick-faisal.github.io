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
    return (
        <Card color="secondary">
            <CardImg
                className="card-img"
                src={require("../assets/" + image)}
                alt={title}
            />
            <CardBody className="card-body">
                <CardTitle tag="h2">{title}</CardTitle>
                <CardText>{description}</CardText>
                {download && (
                    <Button
                        className="icon-btn"
                        color="download"
                        href={download}
                    >
                        <div className="btn-content">
                            <BiDownload size="1.2em" className="icon" />
                            <b>Download</b>
                        </div>
                    </Button>
                )}
                {web && (
                    <Button className="icon-btn" color="primary" href={web}>
                        <div className="btn-content">
                            <TbWorld size="1.2em" className="icon" />
                            Web Demo
                        </div>
                    </Button>
                )}
                {use && (
                    <Button className="icon-btn" color="use" href={use}>
                        <div className="btn-content">
                            <DiGitBranch size="1.2em" className="icon" />
                            <b>Use This</b>
                        </div>
                    </Button>
                )}
                {youtube && (
                    <Button className="icon-btn" color="danger" href={youtube}>
                        <div className="btn-content">
                            <AiFillYoutube size="1.2em" className="icon" />
                            YouTube Demo
                        </div>
                    </Button>
                )}
                {github && (
                    <Button className="icon-btn" color="dark" href={github}>
                        <div className="btn-content">
                            <AiFillGithub size="1.2em" className="icon" />
                            Details on GitHub
                        </div>
                    </Button>
                )}
            </CardBody>
        </Card>
    );
}
