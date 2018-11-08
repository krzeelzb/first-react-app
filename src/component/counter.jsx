import React, { Component } from "react";

class Counter extends Component {
  //called before the latesest render output
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //prints previous properties of all objects
    console.log("Component-getSnapshotBeforeUpdate", prevProps);
    //returns previous properties of object
    return prevProps;
  }

  //called after render() when a component has been updated and after getSnapshotBeforeUpdate
  componentDidUpdate(prevProps, prevState) {
    //prints previous properties of all objects
    console.log("ComponentDidUpdate prevProps", prevProps);
    //prints previous states of all objects
    console.log("ComponentDidUpdate  prevState", prevState);
    //checking if the value of a particual counter object has changed
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  //called ater the render of the component
  componentDidMount() {
    //prints string, so that we know when it is called
    console.log("Counter-mounted");
  }
  // called before a component is deleted, after getSnapshotBeforeUpdate
  componentWillUnmount() {
    console.log("Counter-unmount");
  }

  render() {
    //prints to console
    console.log("Counter-rendered");
    //returning statement
    return (
      <div>
        {/* calling functions: getbadgeClasses() and formatCounts() */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // action when clicking, we call onIncrement function declared in App.js,
          //the atributtes: elemnent from counters array
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          // action when clicking, we call onDelete function declared in App.js,
          //the atributtes: id elemnent from counters array
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
