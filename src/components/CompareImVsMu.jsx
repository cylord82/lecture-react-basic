import React, { Component, PureComponent } from "react";

class CompareImVsMu extends PureComponent {
  state = {
    messages: ["안녕?", "Hola"]
  };

  handleAddMessage = () => {
    const { messages } = this.state;

    messages.push("메시지" + Math.random());

    this.setState({ messages });

    //this.forceUpdate();
  };

  render() {
    const { messages } = this.state;

    return (
      <div style={{ textAlign: "left", padding: 20 }}>
        <div>메시지 총갯수: {messages.length}</div>
        <button onClick={this.handleAddMessage}>랜덤 메시지 생성</button>
        <ul>{messages.map((m, idx) => <li key={idx}>{m}</li>)}</ul>
      </div>
    );
  }
}

export default CompareImVsMu;
