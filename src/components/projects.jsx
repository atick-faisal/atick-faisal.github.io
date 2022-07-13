import { Row } from "reactstrap";
import Item from "./item";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <>
            {projects.map((projectPair, i) => (
                <Row key={i}>
                    {projectPair.map((project, j) => (
                        <Item
                            key={i + j}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            btnText={project.btn_text}
                            link={project.link}
                        />
                    ))}
                </Row>
            ))}
        </>
    );
}
