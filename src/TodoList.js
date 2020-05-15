import React from "react";

class TodoList extends React.Component {
	render() {
		return this.props.todos.map((value, index) => {
			console.log(value);
			return (
				<div className="todo" key={index}>
					{value.todo}
					<button
						onClick={() => {
							this.props.onDelete(value);
						}}
					>
						삭제
					</button>
				</div>
			);
		});
	}
}

export default TodoList;
