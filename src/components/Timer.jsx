import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    console.log("Mounting: 1. constructor");
    super(props);
    this.state = {
      status: "Mounting",
      date: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.status === "Mounting") {
      console.log("Mounting: 2. static getDerivedStateFromProps", props, state);
    }
    if (state.status === "Mounted") {
      console.log("Updating: 1. static getDerivedStateFromProps", props, state);
    }

    return {
      date: new Date()
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.status === "Mounted") {
      console.log("Updating: 2. shouldComponentUpdate --> true");
    }
    return true;
  }

  render() {
    if (this.state.status === "Mounting") {
      console.log("Mounting: 3. render");
    }

    if (this.state.status === "Mounted") {
      console.log("Updating: 3. render");
    }

    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 에 새로운 값을 쓰기 바로 전에 호출되므로 ref 값으로 DOM을 저장하고 있다면 DOM의 이전 속성을 얻어올수있다.
    // 이전 스크롤의 값을 유지할때 유용하다.
    // 반드시 값을 리턴해야한다. 없으면 null 반환

    if (this.state.status === "Mounted") {
      console.log("Updating: 4. getSnapshotBeforeUpdate");
    }

    return null;
  }

  componentDidUpdate(prevPropsprevProps, prevState, snapshot) {
    if (this.state.status === "Mounted") {
      console.log("Updating: 5. componentDidUpdate");
    }
  }

  componentDidMount() {
    if (this.state.status === "Mounting") {
      console.log("Mounting: 4. componentDidMount");
    }
    setTimeout(() => {
      this.setState({
        status: "Mounted",
        date: new Date()
      });
    }, 5000);
  }
}
export default Timer;
