import AboutMe from "./components/AboutMe/AboutMe";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
    </div>
  );
};

export default App;
