import React, { Component } from "react";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import logo from "./logo.svg";
import "./App.css";

const goals = [
  { title: "React 개발에 필요한 환경을 구축한다.", completed: true },
  { title: "새로운 자바스크립트 문법을 익힌다.", completed: false },
  { title: "개발 편의를 위한 VSCode IDE를 익힌다.", completed: false },
  { title: "기본적인 Git 사용법을 익힌다.", completed: false },
  { title: "PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.", completed: false },
  { title: "React 로 간단한 노트 앱을 만들어본다.", completed: false }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Todos title="강의목표" items={goals} />
        <Timer expireDate={"2018-07-01T17:00:00+09:00"} />
      </div>
    );
  }
}

export default App;
