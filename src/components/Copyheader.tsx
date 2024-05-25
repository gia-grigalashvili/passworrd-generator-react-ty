import styled from "styled-components";
import copyimg from "/public/images/icon-copy.svg";
function Copuheader({ password }) {
  return (
    <Copypass>
      <h2 className="password">{password}</h2>
      <img className="copy-img" src={copyimg} alt="" />
    </Copypass>
  );
}
const Copypass = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #24232c;
  color: #e6e5ea;
  padding: 14px 15px;
  margin-bottom: 16px;
  .password {
    font-family: "JetBrains Mono";
    font-size: 24px;
    line-height: 32px;
    mix-blend-mode: normal;
    opacity: 0.25;
    color: #f8f8f8;
  }
  .copy-img {
    width: 17.5px;
    height: 20px;
  }
`;
export default Copuheader;
