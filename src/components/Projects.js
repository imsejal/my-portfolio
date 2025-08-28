import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import { Link } from "react-router-dom";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.jpg";
// import projImg5 from "../assets/img/project-img5.png";
// import projImg8 from "../assets/img/project-img8.png";
import projectData from "../data/projects";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // const projects = [
  //   {
  //     title: "Real-Time Code Editor",
  //     description: "WebSockets, Node.js & JavaScript",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Sign Language Interpreter",
  //     description: "CNN, Deep Learning & Python",
  //     imgUrl: projImg8,
  //   },
  //   {
  //     title: "Algorithm Visualization Tool",
  //     description: "DSA, CPP & Path Finding Algothims",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "ImaginAI (Generative AI App)",
  //     description: "Generative AI models & Prompt engineering",
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: "Billing System",
  //     description: "C++, DSA & File Handling",
  //     imgUrl: projImg4,
  //   },
  //   {
  //     title: "2248 Puzzle Game",
  //     description: "ReactJs & JavaScript",
  //     imgUrl: projImg5,
  //   },
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Here are some of my recent projects. </h2>
                  <p>
                    I believe in building with a purpose. This collection
                    showcases a diverse range of my work, from collaborative
                    real-time applications to AI-powered tools. Each project
                    represents a unique challenge and an opportunity to apply my
                    skills in full-stack development, machine learning, and data
                    structures. Feel free to click on any project to dive deeper
                    into its features and technology stack.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectData.map((project, index) => (
                            <Col key={index} size={12} sm={6} md={4}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>More projects or experiments will go here.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          This section can be used for archived or future
                          projects.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="decorative background"
      ></img>
    </section>
  );
};
