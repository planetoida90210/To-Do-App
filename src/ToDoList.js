import React, { Component } from "react";
import Todo from "./Todo";

class ToDoList extends Component {
  state = {
    todos: [{ task: "Wyjsc z pysiem" }, { task: "Zrobic taco" }]
  };
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h3>To do list!</h3>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default ToDoList;
