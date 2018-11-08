import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  //called once, when instance of class is created,
  //called before the component is mounted
  constructor(props) {
    //calling super(props) so that to define this.props
    super(props);
    console.log("App-constructor", this.props);
    // this.state=this.props.something
  }

  //called before render(),
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps from Child");
    //prints the next properties for the components
    console.log(nextProps);
    //prints the previous state for the components(child)
    console.log(prevState);
    return null;
  }
  //called ater the render of the component
  componentDidMount() {
    console.log("App-mounted");
  }

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters]; //clone
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    console.log("Event Handler Called", this.counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    console.log("App-rendered");
    return (
      <React.Fragment>
        <Navbar
          // inicialize variable only with the values from counters array,
          // if the length of the array is more than 0
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            //setting the list of counter from thae state
            counters={this.state.counters}
            //matching the event onReset with handleReset
            //will be catched by a child component
            onRest={this.handleReset}
            //matching the event onincrement with handleIncrement
            onIncrement={this.handleIncrement}
            //matching the event onDelete with handleDelete
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
