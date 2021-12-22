import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import TopMenuBar from "./Components/Includes/TopMenuBar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import InteriorDesigns from "./Components/Services/InteriorDesigns";
import Portfolio from "./Components/Portfolio/Portfolio";
import Constructions from './Components/Services/Constructions';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenuBar />
        <Routes>
          <Route path="/creativedesigns" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/interior-design" element={<InteriorDesigns />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/constructions" element={<Constructions />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
