import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component{
  render(){
    const { items, handleClean, handleDelete, handleUpdate } = this.props;
    return(
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {items.map(item => {
          return <TodoItem
            key={item.id}
            title={item.item}
            handleDelete={()=> handleDelete(item.id)}
            handleUpdate = {() => handleUpdate(item.id)}
          />
        })}

        <button className="btn btn-danger btn-block mt-5 text-capitalize" onClick={handleClean} >clear list</button>
      </ul>
    )
  }
}

export default TodoList;
