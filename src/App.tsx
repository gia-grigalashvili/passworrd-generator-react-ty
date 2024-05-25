import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Copyheader from "./components/Copyheader";
import styled from "styled-components";
import Mainconts from "./components/Maincont";
type PasswordState = {
  password: string;
};
function App() {
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <Container>
        <Name />
        <Copyheader password={password} />
        <Mainconts setPassword={setPassword}></Mainconts>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 343px;
  margin-top: 100px;
`;
export default App;
