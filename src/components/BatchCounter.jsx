import React, { Component } from "react";

function increment(state, props) {
  return {
    count: state.count + 1
  };
}

class Counter extends Component {
  state = { count: 0 };

  handleIncrementThree = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  handleIncrementDirect = () => {
    this.setState(increment);
    this.setState(increment);
    this.setState(increment);
  };

  render() {
    console.log("render.....");
    return (
      <div>
        <button onClick={this.handleIncrementThree}>
          한번에 3번, 배치로 동작
        </button>
        <button onClick={this.handleIncrementDirect}>
          한번에 3번 바로 호출
        </button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default Counter;
