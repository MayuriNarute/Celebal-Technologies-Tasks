import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { title, completed, handleDelete, handleEdit, handleToggleComplete } = this.props;

    return (
      <>
        <li
          className={`list-group-item text-capitalize d-flex justify-content-between my-2 ${
            completed ? 'completed' : ''
          }`}
        >
          <h6 onClick={handleToggleComplete} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {title}
          </h6> 
          <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fa fa-pencil"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fa fa-trash"></i>
            </span>
          </div>
        </li>
      </>
    );
  }
}
