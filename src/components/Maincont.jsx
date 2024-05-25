import { useState } from "react";
import styled from "styled-components";
import Slidercontainer from "./Sliderconteiner";
import Checkbox from "./Chekbox";
import Strength from "./strength";
import Generator from "./Generator";

function Maincont({ setPassword }) {
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));
  const [length, setLength] = useState(10); // Default length

  const generatePassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = "";
    if (checkedState[0]) characterPool += upperCaseLetters;
    if (checkedState[1]) characterPool += lowerCaseLetters;
    if (checkedState[2]) characterPool += numbers;
    if (checkedState[3]) characterPool += symbols;

    if (characterPool.length === 0) return "";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <Mainconts>
      {/* <Copuheader password={password} /> */}
      <Slidercontainer length={length} setLength={setLength} />
      <Checkbox setCheckedState={setCheckedState} checkedState={checkedState} />
      <Strength checkedState={checkedState} />
      <Generator generatePassword={generatePassword} />
      {/* <h2 className="password">{password}</h2> */}
    </Mainconts>
  );
}

const Mainconts = styled.div`
  background-color: #24232c;
  padding: 21px 16px 16px;
`;

export default Maincont;
