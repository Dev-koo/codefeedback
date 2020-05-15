import React from "react";
import Title from "./Title";
class Counter extends React.Component {
	state = {
		count: 0
	};
	shouldComponentUpdate() {
		return true;
	}

	onIncrease = () => {
		this.setState({ count: this.state.count + 1 });
	};
	onDecrease = () => {
		this.setState(({ count }) => ({ count: count - 1 }));
	};
	render() {
		return (
			<>
				<Title title="daf" />
				<span>{this.state.count}</span>
				<br />
				<button onClick={this.onIncrease}>증가</button>
				<button onClick={this.onDecrease}>감소</button>
			</>
		);
	}
}

export default Counter;
