import React from "react";

class Title extends React.Component {
	render() {
		return <h1 id="header">{this.props.title}</h1>;
	}
}

Title.defaultProps = {
	title: "기본이름"
};

export default Title;
