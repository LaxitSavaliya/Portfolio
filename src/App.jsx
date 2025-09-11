import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Animation from "./Animations/Animation";

function App() {

  return (
    <>
      <Navbar />
      <main class="pt-20">
        <Animation><Hero /></Animation>
        <Animation><About /></Animation>
        <Animation><Skills /></Animation>
        <Animation><Project /></Animation>
        <Animation><Education /></Animation>
        <Animation><Contact /></Animation>
      </main>
      <Footer />
    </>
  );
}

export default App;