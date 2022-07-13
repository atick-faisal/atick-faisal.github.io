import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from "reactstrap";

export default function Item({ img, title, description, btnText, link }) {
    return (
        <Card>
            <CardImg className="card-img" src={img} alt={title} />
            <CardBody className="card-body">
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
                <Button href={link}>{btnText}</Button>
            </CardBody>
        </Card>
    );
}
