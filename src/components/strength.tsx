/* eslint-disable react/prop-types */
import styled from "styled-components";
interface StrengthProps {
  checkedState: boolean[];
}
function Strength({ checkedState }: StrengthProps) {
  const levels = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

  const getStrengthLevel = () => {
    const activeCount = checkedState.filter(Boolean).length;
    switch (activeCount) {
      case 0:
        return "";
      case 1:
        return levels[0];
      case 2:
        return levels[1];
      case 3:
        return levels[2];
      case 4:
        return levels[3];
      default:
        return "";
    }
  };

  const strengthLevel = getStrengthLevel();
  const activeCount = checkedState.filter(Boolean).length;

  return (
    <Maindiv>
      <p>STRENGTH</p>
      <div className="strength-lvl">
        <span className="strength-txt">{strengthLevel}</span>
        <div className="lvl-boxes">
          {levels.map((_, index) => (
            <div
              key={index}
              className={`box ${
                index < activeCount ? `level-${activeCount}` : "inactive"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  margin-bottom: 16px;
  background: #18171f;

  .strength-lvl {
    display: flex;
    align-items: center;
    gap: 16px;

    .lvl-boxes {
      display: flex;
      gap: 8px;
    }

    .box {
      width: 10px;
      height: 28px;
      flex-shrink: 0;
    }
  }

  .strength-txt {
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: #e6e5ea;
  }

  .inactive {
    background: white;
  }
  .level-1 {
    background: red;
  }
  .level-2 {
    background: #fb7c58;
  }
  .level-3 {
    background: #f8cd65;
  }
  .level-4 {
    background: #a4ffaf;
  }
`;

export default Strength;
