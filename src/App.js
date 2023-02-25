import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;
