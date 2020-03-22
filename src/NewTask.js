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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Dodaj zadanie</label>
        <input
          type='text'
          placeholder='Dodaj zadanie'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Dodaj do listy</button>
      </form>
    );
  }
}

export default NewTask;
