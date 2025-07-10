import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Project";
import Skills from "./Sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {" "}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
