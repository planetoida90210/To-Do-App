import React, { Component } from "react";
import Todo from "./Todo";
import NewTask from "./NewTask";

class ToDoList extends Component {
  state = {
    todos: []
  };
  create = newTask => {
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };
  remove = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  };
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
        />
      );
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
