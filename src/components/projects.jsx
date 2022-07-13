import { Row } from "reactstrap";
import ProjectItem from "./project-item";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <>
            {projects.map((projectPair, i) => (
                <Row key={i}>
                    {projectPair.map((project, j) => (
                        <ProjectItem
                            key={i + j}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            btnText={project.btn_text}
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
