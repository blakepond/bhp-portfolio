
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Projects from './components/projectList/ProjectList';
import TechStack from './components/techStack/TechStack';

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
