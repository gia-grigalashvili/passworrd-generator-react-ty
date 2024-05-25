/* eslint-disable react/prop-types */
// import { useState } from "react";
import styled from "styled-components";
// import check from "/public/images/icon-check.svg";

function Checkbox({ setCheckedState, checkedState }) {
  const options = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <Checkboxmain>
      {options.map((text, index) => (
        <div key={index} className="cont">
          <label className="container">
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
              className="check"
            />
            <span className="checkmark"></span>
          </label>
          <span className="checkbox-text">{text}</span>
        </div>
      ))}
    </Checkboxmain>
  );
}
const Checkboxmain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 32px;
  .cont {
    display: flex;
    gap: 20px;
    .check {
      display: none;
    }
    .checkmark {
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 2px solid rgb(255, 255, 255);
      cursor: pointer;
    }
  }
  .check:checked + .checkmark {
    background-color: #a4ffaf;
    border: 2px solid #a4ffaf;
    background-image: url("./images/icon-check.svg");
    background-repeat: no-repeat;
    background-size: 17px;
    background-position: center center;
  }
  .check {
    display: none;
  }
`;
export default Checkbox;
