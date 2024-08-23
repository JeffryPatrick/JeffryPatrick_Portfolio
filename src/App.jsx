import './App.css'
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Objective from "./components/Objective.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Education from "./components/Education.jsx"
import Contact from "./components/Contact.jsx"

function App() {
    return (<>
            <Navbar/>
            <About/>
            <Objective/>
            <Skills/>
            <Projects/>
            <Education/>
            <Contact/>
        </>

    )
}

export default App
