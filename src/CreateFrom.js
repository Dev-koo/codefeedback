import React from "react";

class CreateFrom extends React.Component {
	constructor(props) {
		super(props);
		this.inputValue = React.createRef();
	}

	render() {
		return (
			<div id="create-form">
				<input
					type="text"
					onKeyDown={e => {
						if (e.keyCode === 13) {
							this.props.onCreate(this.inputValue.current.value);
							this.inputValue.current.value = "";
							this.inputValue.current.focus();
						} else {
							return;
						}
					}}
					ref={this.inputValue}
				/>
				<button
					onClick={() =>
						this.props.onCreate(this.inputValue.current.value)
					}
				>
					추가
				</button>
			</div>
		);
	}
}

export default CreateFrom;
