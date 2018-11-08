import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     console.log("Constructor", this);
  //     //new instance of handleIncrement
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {
  //     console.log("Increment Clicked", this);
  //   }

  // handleIncrement = () => {
  //   console.log("Increment Clicked", this);
  //   // console.log(product);
  //   // this.props.value = 0;
  //   this.setState({ value: this.state.value + 1 });
  // };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Component-getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate prevProps", prevProps);
    console.log("ComponentDidUpdate  prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentDidMount() {
    console.log("Counter-mounted");
  }

  componentWillUnmount() {
    console.log("Counter-unmount");
  }
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    console.log("Counter-rendered");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={() => this.handleIncrement(product)}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
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
