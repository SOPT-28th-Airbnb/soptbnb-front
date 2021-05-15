import NearTitle from "./components/main/NearTitle";
import Host from "./pages/Host";

import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainWrap = styled.div`
  * {
    margin: 1rem 2rem;
  }
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainWrap>
            <NearTitle />
          </MainWrap>
        </Route>
        <Route path="/host">
          <Host />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
