import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: #fff;
`;

// class 대신에 props 를 사용한다.
const SubTitle = styled.p`
  font-size: ${props => (props.small ? "14px" : "1.5em")};
  color: ${props => (props.primary ? "blue" : "white")};
`;

class StyledAppTitle extends Component {
  render() {
    return (
      <div>
        <Title>Welcome to React</Title>
        <SubTitle small>props로 지정할수도 있는건지 몰랐지?</SubTitle>
      </div>
    );
  }
}

export default StyledAppTitle;
