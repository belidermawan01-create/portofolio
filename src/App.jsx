import "./App.css";
import Footer from "./components/Footerr/Footer";
import NavbarComponent from "./components/Navbarr/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home/Home";
import Who from "./page/Who/Who";
import Work from "./page/Work/Work";
import Contact from "./page/Contact/Contact";

function App() {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<Who />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
