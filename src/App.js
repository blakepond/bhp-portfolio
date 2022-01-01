import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Projects from "./components/projectList/ProjectList";
import TechStack from "./components/techStack/TechStack";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Header from "./components/Header/Header";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#232020" : "white",
        color: darkMode && "white",
      }}
    >
      <Header/>
      <Toggle />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
