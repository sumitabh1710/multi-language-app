import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={"loading"}>
      <div className="app">
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
