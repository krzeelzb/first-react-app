import React, { Component } from "react";
import Counter from "./counter";
// import App from "src/App";
// import { throws } from "assert";

class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    //creating variables depenting on this.props,
    // so that to use them insted of e.g this.props.onIncrement
    const { onRest, counter, onDelete, onIncrement } = this.props;
    return (
      <div>
        {/* calling onReset function from App.js based on handlereset (creating event) onclick action */}
        <button onClick={onRest} className="btn primary sm m-2">
          Reset
        </button>

        {/* creating the list of components (counter) and specifying id 
        and functions on the functions to call" onDelete and onIncrement */}
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            // onDelete={this.props.onDelete}
            onDelete={onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

