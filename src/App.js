import Main from "./pages/Main";
import Host from "./pages/Host";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/host" component={Host} />
      </Switch>
    </Router>
  );
}

export default App;
