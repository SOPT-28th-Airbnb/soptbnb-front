import NearTitle from "./components/main/NearTitle";

import styled from "styled-components";

const MainWrap = styled.div`
  * {
    margin: 1rem 2rem;
  }
`;

function App() {
  return (
    <MainWrap>
      <NearTitle />
    </MainWrap>
  );
}

export default App;
