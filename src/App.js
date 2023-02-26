import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import AboutMe from "./about-me/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <AboutMe />
    </BrowserRouter>
  );
}

export default App;
