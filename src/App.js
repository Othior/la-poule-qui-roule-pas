import './App.css';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import Accueil from './component/Accueil/Accueil';
import Navbar from './component/Navbar/Navbar';
import Contact from './component/Contact/Contact';
import Apropos from './component/A_Propos/A_Propos';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Accueil className="accueil" />
        </Route>
        <Route exact path="/a_propos">
          <Apropos className="no" />
        </Route>
        <Route exact path="/contact">
          <Contact className="test" />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
