import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Host from "./pages/Host";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/host">
          <Host />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
