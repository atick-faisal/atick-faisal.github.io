import { Button } from "reactstrap";
import { SiGooglescholar } from "react-icons/si";

export default function PublicationHeader() {
    return (
        <div className="header-card publication-header">
            <div className="description">
                <h1>Publications</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <Button
                    color="primary"
                    href="https://scholar.google.com/citations?hl=en&user=ZiPKjAgAAAAJ/"
                >
                    <div className="btn-content">
                        <SiGooglescholar size="1.2rem" className="icon" />
                        Explore on Google Scholar
                    </div>
                </Button>
            </div>
        </div>
    );
}
