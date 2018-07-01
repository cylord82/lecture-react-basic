import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const TIME_FORMAT = "A h:mm";
class Timer extends Component {
  constructor(props) {
    super(props);

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

  render() {
    if (moment(this.props.expireDate) < this.state.date) {
      this.props.onComplete && this.props.onComplete();
      return <div>종료 되었습니다</div>;
    }

    return (
      <div>
        <div>현재시간은 {this.state.date.format(TIME_FORMAT)}</div>
        <div>{moment(this.props.expireDate).fromNow()}에 강의 종료 합니다.</div>
      </div>
    );
  }

  componentWillUnmount() {
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}
export default Timer;
