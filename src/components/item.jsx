import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from "reactstrap";

import { AiFillGithub } from "react-icons/ai";

export default function Item({ img, title, description, btnText, link }) {
    return (
        <Card color="secondary">
            <CardImg className="card-img" src={img} alt={title} />
            <CardBody className="card-body">
                <CardTitle tag="h2">{title}</CardTitle>
                <CardText>{description}</CardText>
                <Button className="icon-btn" color="primary" href={link}>
                    <div className="btn-content">
                        <AiFillGithub size="1.2em" className="icon" />
                        {btnText}
                    </div>
                </Button>
            </CardBody>
        </Card>
    );
}
