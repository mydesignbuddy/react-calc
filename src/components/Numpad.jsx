import React from "react";
import styled from "styled-components";

const Numpad = styled.div`
  width: 200px;
`;

const Button = styled.button`
  outline: none;
  width: ${props => (props.wide ? "100px" : "50px")};
  height: 50px;
  border: 1px solid #6e6d6e;
  background-color: rgba(130, 130, 130, 0.9);
  color: #ebeceb;
  font-size: 20px;
`;

const OperationButton = styled(Button)`
  background-color: rgba(255, 159, 11, 0.9);
`;

const DarkButton = styled(Button)`
  background-color: rgba(106, 106, 106, 0.9);
`;

export default ({ onNumber, onOperator, onEqual, onClear }) => (
  <Numpad>
    <DarkButton onClick={onClear}>C</DarkButton>
    <DarkButton>+/-</DarkButton>
    <DarkButton>%</DarkButton>
    <OperationButton onClick={() => onOperator("/")}>&divide;</OperationButton>
    <Button onClick={() => onNumber(7)}>7</Button>
    <Button onClick={() => onNumber(8)}>8</Button>
    <Button onClick={() => onNumber(9)}>9</Button>
    <OperationButton onClick={() => onOperator("*")}>x</OperationButton>
    <Button onClick={() => onNumber(4)}>4</Button>
    <Button onClick={() => onNumber(5)}>5</Button>
    <Button onClick={() => onNumber(6)}>6</Button>
    <OperationButton onClick={() => onOperator("-")}>-</OperationButton>
    <Button onClick={() => onNumber(1)}>1</Button>
    <Button onClick={() => onNumber(2)}>2</Button>
    <Button onClick={() => onNumber(3)}>3</Button>
    <OperationButton onClick={() => onOperator("+")}>+</OperationButton>
    <Button onClick={() => onNumber(0)} wide>
      0
    </Button>
    <Button>.</Button>
    <OperationButton onClick={onEqual}>=</OperationButton>
  </Numpad>
);
