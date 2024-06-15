import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit, handleToggleComplete } = this.props;

    return (
      <>
        <ul className="list-group my-5">
          <h3 className="text-capitalize">task list</h3>
          <hr />
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                completed={item.completed}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleToggleComplete={() => handleToggleComplete(item.id)}
              />
            );
          })}
          <button onClick={clearList} type="button" className="btn btn-danger btn-block text-uppercase mt-5">
            Clear List
          </button>
          <br />
          <hr />
        </ul>
      </>
    );
  }
}
