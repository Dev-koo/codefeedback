import React from "react";
import Title from "./Title.js";
class Todo extends React.Component {
  state = { count: 0 };
  onIncrease = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    return (
      <>
        <Title title={`타이틀 번호: ${this.state.count}`} />
        <button onClick={this.onIncrease}>증가</button>
      </>
    );
  }
}

export default Todo;
