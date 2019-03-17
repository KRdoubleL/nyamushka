import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Main from "./components/main/main.jsx";
import styled from 'styled-components';
import $ from 'jquery';

const Background = styled.div`
  padding: 0;
  padding-left: 80px;
  padding-right: 80px;
  margin: 0 auto;
  text-align: center;
`;

const Test = () => {
  return <Background><Main /></Background>
};

ReactDOM.render(
  <Test/>,
  document.getElementById("root")
);
