import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Display from "./Display";
import Numpad from "./Numpad";

const Calculator = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 200px;
  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
`;

export default () => {
  const [equation, setEquation] = useState([]);
  const [display, setDisplay] = useState("");
  const [total, setTotal] = useState(0);

  const onClear = () => {
    setEquation([]);
    setDisplay("");
    setTotal(0);
  };

  const onNumber = val => {
    const eq = [...equation, val];
    setEquation(eq);
    setDisplay(eq.join(" "));
    console.log("clicked num", val, eq);
  };

  const onOperator = val => {
    const eq = [...equation, val];
    setEquation(eq);
    setDisplay(eq.join(" "));
    console.log("clicked op", val, eq);
  };

  const onEqual = () => {
    const operatorsChars = /[*/x+-]/gi;
    const numbers = equation.join("").split(operatorsChars);
    console.log(numbers);
    const operators = equation.join("").match(operatorsChars);
    console.log(operators);
    let eq = [];
    let total = parseInt(numbers[0]);

    for (let n = 0; n < numbers.length; n++) {
      if (n === 0) {
        eq.push(numbers[n]);
      }
      if (typeof operators[n] !== "undefined") {
        eq.push(operators[n]);
        eq.push(numbers[n + 1]);
        switch (operators[n]) {
          case "+":
            total = total + parseInt(numbers[n + 1]);
            break;
          case "-":
            total = total - parseInt(numbers[n + 1]);
            break;

          case "/":
            total = total / parseInt(numbers[n + 1]);
            break;
          case "*":
            total = total * parseInt(numbers[n + 1]);
            break;
          default:
            break;
        }
      }
    }
    console.log(eq);
    console.log(total);
    setDisplay(`${eq.join(" ")} = ${total}`);
    setTotal(total);
  };

  useEffect(() => {
    console.log("display", display);
  });

  return (
    <Calculator>
      <Display display={display} />
      <Numpad
        onNumber={onNumber}
        onOperator={onOperator}
        onEqual={onEqual}
        onClear={onClear}
      />
    </Calculator>
  );
};
