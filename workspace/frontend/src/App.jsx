import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Projects from "./components/projects/projects";
import Experiences from "./components/projects/experiences/experiences";
import About from "./components/about/about"
import Chat from "./components/chat/chat"

import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <div id="projects">
        <h2>Projects</h2>
        <Projects
          name="Project 1 Name"
          description="description here"
          github="https://github.com/Real-Trevor/JDT-spring-25-alpha"
        />
        <Projects
          name="Project 2 Name"
          description="description here"
          github="https://github.com/Real-Trevor/JDT-spring-25-alpha"
        />
      </div>
      <div id="exp">
        <h2>Experiences</h2>
        <Experiences
          title="Job Title"
          info="Company Name, Location, State"
          dates="Dates - Dates"
          bullets={["Point 1", "Point 2", "Point 3"]}
        />
      </div>
    </>
  );
}

export default App;
