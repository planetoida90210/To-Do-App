import React, { Component } from "react";
import Todo from "./Todo";
import NewTask from "./NewTask";

class ToDoList extends Component {
  state = {
    todos: [{ task: "Wyjsc z pysiem" }, { task: "Zrobic taco" }]
  };
  create = newTask => {
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h3>To do list!</h3>
        <NewTask createTask={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default ToDoList;
