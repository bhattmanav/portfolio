import { BrowserRouter } from "react-router-dom";
import ScrollToHashElement from "./functions/ScrollToHashElement";
import Header from "./header/Header";
import Home from "./home/Home";
import AboutMe from "./about-me/AboutMe";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
