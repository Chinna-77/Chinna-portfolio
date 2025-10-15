import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-200 dark:from-gray-900 dark:to-black min-h-screen text-gray-900 dark:text-white">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
