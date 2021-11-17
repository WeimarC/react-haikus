import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Home from "./src/home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contactanos from "./contactanos/Contactanos";
import Compartir from "./components/layout/Compartir";

function App() {
  return (
    <> 
    <Router>
      <Header />
      <Main>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Contactanos">
      <Contactanos />
      <Compartir/>
        </Route>
      </Switch>
      </Main>
      <Footer />
    </Router> 
    </>
  );
}

export default App;
