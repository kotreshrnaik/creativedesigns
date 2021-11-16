import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import TopMenuBar from './Components/Includes/TopMenuBar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenuBar />
        <Switch>
        <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/portfolio" exact component={Portfolio}></Route>
        </Switch>
        <Footer>

        </Footer>
      </Router>
    </div>
  );
}

export default App;
