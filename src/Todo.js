import React, { Component } from "react";

class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.task
  };
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };
  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };
  handleEdit = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleToggle = e => {
    this.props.toggleTodo(this.props.id);
  };
  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <form onSubmit={this.handleEdit}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Zapisz</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className='app-task-container'>
          <button className='app-btn-action' onClick={this.toggleEdit}>
            <i className='fas fa-edit'></i>
          </button>
          <button className='app-btn-action' onClick={this.handleRemove}>
            <i className='fas fa-trash-alt'></i>
          </button>
          <li
            className={this.props.completed ? "app-task-completed" : "app-task"}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
  }
}

export default Todo;
