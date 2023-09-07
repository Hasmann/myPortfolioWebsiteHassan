import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout.component";
import Home from "./components/Home/home.component";
import About from "./components/About/about.components";
import "./App.scss";
import Contact from "./components/Contact/contact.components";
import Portfolio from "./components/Portfolio/portfolio.component";
import Resume from "./components/Resume/resume.components";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
