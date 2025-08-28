import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import projectData from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === Number(id));
  if (!project) {
    return (
      <>
        <NavBar />
        <h1 className="project-not-found">Project not found.</h1>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <div className="project-details-page">
        <div className="project-details-content">
          <h1>{project.title}</h1>
          <p>{project.longDescription || project.description}</p>

          {project.images && (
            <div className="project-images">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}

          <h3>Technologies Used:</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <div className="links-container">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
