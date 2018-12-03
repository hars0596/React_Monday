import React, { Component } from "react";
//import logo from './logo.svg';
//import "./App.css";
import Forms from "./components/form";

class App extends Component {
  state = {
    fields: {}
  };
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
    // console.log("App comp got:", fields);
  };
  render() {
    return (
      <div className="App">
        <Forms onChange={fields => this.onChange(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;
