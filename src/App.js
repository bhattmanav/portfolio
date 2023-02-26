import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import AboutMe from "./about-me/AboutMe";
import Footer from "./footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <AboutMe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
