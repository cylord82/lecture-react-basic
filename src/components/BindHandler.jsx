import React, { Component } from "react";

class LoggingButton extends React.PureComponent {
  handleClick() {
    console.log("this is:");
  }

  render() {
    console.log("render LoggingButton");
    return <button onClick={e => this.handleClick(e)}>Click me</button>;
  }
}

class BindHandler extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>

        <button onClick={this.handleClick}>
          여기를 클릭하면 핸들러가 반응해!
        </button>

        <LoggingButton onChildClick={() => {}} />
      </div>
    );
  }
}

export default BindHandler;
