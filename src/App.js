// import logo from "./logo.svg";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import projectData from "./data/projects";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/projects/:id"
            element={<ProjectDetails projects={projectData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
