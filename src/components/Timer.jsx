import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    console.log("Mounting: 1.constructor");
    super(props);
    this.state = {
      date: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Mounting: 2-1. static getDerivedStateFromProps", props, state);
    return {
      date: new Date()
    };
  }

  render() {
    console.log("Mounting: 2-2.render");
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }

  componentDidMount() {
    console.log("Mounting: 3.componentDidMount");
  }
}
export default Timer;
