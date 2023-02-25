import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
