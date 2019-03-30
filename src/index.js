import React, {Component} from 'react';
import ReactDOM from "react-dom";
//import Main from './components/main/Main.jsx';

require ('./index.scss')

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <p>text</p>
      //<Main />
      </div>
    )
  }
}

ReactDOM.render(
  Test,
  document.getElementById("root")
);
