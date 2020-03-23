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

  update = (id, updateTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  };
  toggleCompletedTask = id => {
    const completedTask = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: completedTask });
  };
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          toggleTodo={this.toggleCompletedTask}
          removeTodo={this.remove}
          updateTodo={this.update}
        />
      );
    });
    return (
      <div>
        <h3 className='app-date'>Today is </h3>
        <p>Bądź lepszą wersją siebie!</p>
        <NewTask createTask={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default ToDoList;
