
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenuBar from "./Components/ReactBS/Includes/TopMenuBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenuBar />
        <Switch>
        <Route path="/" exact component={Home}></Route>
          {/* <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route> */}
        </Switch>
        <Footer>

        </Footer>
      </Router>
    </div>
  );
}

export default App;
