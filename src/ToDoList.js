import React, { Component, Fragment } from "react";
import Todo from "./Todo";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
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
      <Fragment>
        <div className='main-header'>
          <h1>
            todo app <i className='fas fa-clipboard-list' />
          </h1>
          <p className='main-quote'>Bądź lepszą wersją siebie!</p>
          <TaskList tasks={this.state.todos} done={this.state.done} />
        </div>
        <div>
          <h3 className='app-date'>Zadania na dziś: </h3>
          <ul className='app-todos-container'>{todos}</ul>
          <NewTask createTask={this.create} />
        </div>
      </Fragment>
    );
  }
}

export default ToDoList;
