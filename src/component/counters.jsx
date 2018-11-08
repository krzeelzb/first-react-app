import React, { Component } from "react";
import Counter from "./counter";
// import App from "src/App";
// import { throws } from "assert";

class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    const { onRest, counter, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onRest} className="btn primary sm m-2">
          Reset
        </button>
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
