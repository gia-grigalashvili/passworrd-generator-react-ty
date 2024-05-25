import styled from "styled-components";
function Name() {
  return (
    <div>
      <MainName>Password Generator</MainName>
    </div>
  );
}

const MainName = styled.h1`
  color: #817d92;
  text-align: center;
  font-family: "JetBrains Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 100px;
`;
export default Name;
