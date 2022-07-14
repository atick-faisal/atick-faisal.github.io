import { Row } from "reactstrap";
import PublicationItem from "./publication-item";
import publications from "../data/publications.json";
import PublicationHeader from "./publication-header";

export default function Publications() {
    return (
        <>
            <PublicationHeader />
            {publications.map((publicationPair, i) => (
                <Row key={i}>
                    {publicationPair.map((publication, j) => (
                        <PublicationItem
                            key={i + j}
                            image={publication.image}
                            title={publication.title}
                            publisher={publication.publisher}
                            online={publication.online}
                            pdf={publication.pdf}
                        />
                    ))}
                </Row>
            ))}
        </>
    );
}
