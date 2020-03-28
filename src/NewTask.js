import React, { Component } from "react";
import uuid from "uuid/v4";
class NewTask extends Component {
  state = {
    task: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTask({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='app-form'>
        <input
          type='text'
          placeholder='Dodaj zadanie'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
          className='app-form-input'
        />
        <button className='app-form-button'>Dodaj</button>
      </form>
    );
  }
}

export default NewTask;
