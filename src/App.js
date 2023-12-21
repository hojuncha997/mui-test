import "./App.css";
import styled from "@emotion/styled";
import Drawer from "./Drawer";
import Header from "./Header";

const Container = styled.div`
  background-color: wheat;
  width: 1200px;
  max-width: 1200px;
  height: 800px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Drawer></Drawer>
      </Container>
    </div>
  );
}

export default App;
