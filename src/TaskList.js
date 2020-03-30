import React, { Component } from "react";

class TaskList extends Component {
  render() {
    return (
      <div className='main-task-counter'>
        <i className='far fa-check-square'>
          <p className='single-task-counter'>wykonane</p>
          <p className='single-task-number'></p>
        </i>
        <i className='fas fa-wrench'>
          <p className='single-task-counter'>aktywne</p>
          <p className='single-task-number'>0</p>
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
