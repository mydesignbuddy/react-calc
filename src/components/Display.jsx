import React from "react";
import styled from "styled-components";

const Display = styled.div`
  width: calc(200px - 20px);
  height: calc(75px - 20px);
  background-color: rgba(90, 90, 90, 0.75);
  color: #f4f4f4;
  font-size: 30px;
  text-align: right;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 0px;
`;

export default ({ display }) => <Display>{display}</Display>;
