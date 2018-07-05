import React, { Component } from "react";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import axios from "axios";
import "./App.less";

const goals = [
  { title: "React 개발에 필요한 환경을 구축한다.", completed: true },
  { title: "새로운 자바스크립트 문법을 익힌다.", completed: false },
  { title: "개발 편의를 위한 VSCode IDE를 익힌다.", completed: false },
  { title: "기본적인 Git 사용법을 익힌다.", completed: false },
  { title: "PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.", completed: false },
  { title: "React 로 간단한 노트 앱을 만들어본다.", completed: false }
];

class App extends Component {
  state = {
    data: [],
    isExpired: false,
    resetCounter: 1
  };

  completeTimer = () => {
    this.setState({ isExpired: true });
  };

  handleReset = () => {
    this.setState({ resetCounter: this.state.resetCounter + 1 });
  };

  componentDidMount() {
    axios.get("http://api.tvmaze.com/search/shows?q=girls").then(({ data }) => {
      this.setState({ data });
    });
  }

  render() {
    const { isExpired, data } = this.state;
    return (
      <div className="App">
        <Header />

        <div className="wrap-todo">
          <Todos title="강의목표" items={goals} />
          {!isExpired && (
            <Timer
              key={this.state.resetCounter}
              expireDate={"2018-07-04T00:00:00+09:00"}
              onComplete={this.completeTimer}
            />
          )}
        </div>

        <ul>
          {data.map((item, idx) => {
            return (
              <li key={idx}>
                <img src={item.show.image.medium} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
