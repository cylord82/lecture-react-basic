import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const TIME_FORMAT = "A h:mm:ss";

class Timer extends Component {
  constructor(props) {
    super(props);

    console.log("constructor...");

    this.state = {
      date: moment()
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment()
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const prevDateStr = this.state.date.format(TIME_FORMAT);
    const nextDateStr = nextState.date.format(TIME_FORMAT);
    return prevDateStr !== nextDateStr;
  }

  checkExpire = () => {
    if (moment(this.props.expireDate) < this.state.date) {
      setTimeout(() => {
        this.props.onComplete && this.props.onComplete();
      }, 1000);
    }
  };

  componentDidMount() {
    console.log("componentDidMount...");
    this.checkExpire();
  }

  componentDidUpdate() {
    this.checkExpire();
  }

  componentWillUnmount() {
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }

  render() {
    if (moment(this.props.expireDate) < this.state.date) {
      return <div>종료 되었습니다</div>;
    }

    return (
      <div>
        <div>현재시간은 {this.state.date.format(TIME_FORMAT)}</div>
        <div>{moment(this.props.expireDate).fromNow()}에 강의 종료 합니다.</div>
      </div>
    );
  }
}
export default Timer;
