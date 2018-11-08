import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/navbar";
import Counters from "./component/counters";

class App2 extends Component {
  state = {};
  constructor(props) {
    super(props);
    //called once, when instance of class is created
    console.log("App-constructor", this.props);
    // this.state=this.props.somethi
  }
  componentDidMount() {
    console.log("App-mount");
  }
  handleIncrement = counter => {};
  handleReset = () => {};
  handleDelete = counterId => {};

  render() {
    console.log("App-rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onRest={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App2;
