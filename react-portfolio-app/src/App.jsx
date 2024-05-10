import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import MyWork from "./components/MyWorks/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
};

export default App;
