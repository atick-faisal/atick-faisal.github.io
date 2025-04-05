import { Row } from "reactstrap";
import ProjectItem from "./ProjectItem.jsx";
import projects from "../data/projects.json";
import ProjectHeader from "./ProjectHeader.jsx";

export default function Projects() {
    return (
        <>
            <ProjectHeader />
            {projects.map((projectPair, i) => (
                <Row key={i}>
                    {projectPair.map((project, j) => (
                        <ProjectItem
                            key={i + j}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            web={project.web}
                            download={project.download}
                            use={project.use}
                            youtube={project.youtube}
                        />
                    ))}
                </Row>
            ))}
        </>
    );
}
