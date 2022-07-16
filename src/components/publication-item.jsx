import { useContext } from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
} from "reactstrap";

import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

import { ThemeContext } from "../contexts/theme-context";

export default function PublicationItem({
    image,
    title,
    publisher,
    online,
    pdf,
}) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Card color={darkMode ? "surface-dark" : "surface"}>
            <CardImg
                className="card-img"
                src={require("../assets/" + image)}
                alt={title}
            />
            <CardBody className="card-body">
                <CardTitle tag="h3">{title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h5">
                    {publisher}
                </CardSubtitle>
                <br />
                <div className="actions">
                    {online && (
                        <Button
                            className="icon-btn"
                            color={darkMode ? "primary-dark" : "primary"}
                            href={online}
                        >
                            <div className="btn-content">
                                <TbWorld size="1.2em" className="icon" />
                                <b>View Online</b>
                            </div>
                        </Button>
                    )}
                    {pdf && (
                        <Button
                            className="icon-btn"
                            color={darkMode ? "danger-dark" : "danger"}
                            href={pdf}
                        >
                            <div className="btn-content">
                                <BsFillFileEarmarkPdfFill
                                    size="1.2em"
                                    className="icon"
                                />
                                <b>PDF</b>
                            </div>
                        </Button>
                    )}
                </div>
            </CardBody>
        </Card>
    );
}
