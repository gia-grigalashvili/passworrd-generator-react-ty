import styled from "styled-components";
import arrow from "/public/images/icon-arrow-right.svg";

function Generator({ generatePassword }) {
  return (
    <Generatee onClick={generatePassword}>
      GENERATE
      <img src={arrow} alt="icon-arrow-right" />
    </Generatee>
  );
}

const Generatee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: "JetBrains Mono", monospace;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: #24232c;
  width: 100%;
  height: 56px;
  background-color: #a4ffaf;
  outline: none;
  border: 0px;
`;

export default Generator;
