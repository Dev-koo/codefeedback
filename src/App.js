import React, { Component } from "react";
import Title from "./Title.js";
import CreateForm from "./CreateForm.js";
import TodoList from "./TodoList.js";
import "./App.css";
class App extends Component {
	state = {
		todos: []
	};
	onCreate = value => {
		console.log("onCreate()", value);
		this.setState({
			todos: [...this.state.todos, { todo: value }]
		});
	};
	onDelete = ({ todo }) => {
		console.log("onDelete()", todo);
		const todos = this.state.todos.filter(todos => {
			if (todos.todo !== todo) return todos;
		});
		this.setState({
			todos: [...todos]
		});
	};
	render() {
		return (
			<>
				<Title title={"오늘뭐하지"} />
				<CreateForm onCreate={this.onCreate} />
				<TodoList todos={this.state.todos} onDelete={this.onDelete} />
			</>
		);
	}
}

export default App;
