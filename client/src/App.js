import {Router, Switch, Route} from "react-router-dom"
import Main from "./components/pages/Main"
import LandingPage from "./components/pages/LandingPage"
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/app" component={Main} />
    </Switch>
  </Router>
  );
}

export default App;