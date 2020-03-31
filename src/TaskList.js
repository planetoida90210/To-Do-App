import React, { Component } from "react";

class TaskList extends Component {
  render() {
    const active = this.props.tasks.filter(task => !task.completed);
    const done = this.props.tasks.filter(task => task.completed);
    return (
      <div className='main-task-counter'>
        <i className='far fa-check-square'>
          <p className='single-task-counter'>wykonane</p>
          <p className='single-task-number'>{done.length}</p>
        </i>
        <i className='fas fa-wrench'>
          <p className='single-task-counter'>aktywne</p>
          <p className='single-task-number'>{active.length}</p>
        </i>
        <i className='fas fa-globe'>
          <p className='single-task-counter'>ogólnie</p>
          <p className='single-task-number'>{this.props.tasks.length}</p>
        </i>
      </div>
    );
  }
}

export default TaskList;
