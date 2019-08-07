import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem:false
  };

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item
    }

    const updatedItems = [...this.state.items,newItem];


    this.setState({
      items : updatedItems,
      item : "",
      id : uuid(),
      editItem : false
    })
  }

  handleClean = () =>{
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) =>{
    const tempItems = this.state.items.filter( i => i.id !== id);
    this.setState({
      items:tempItems
    });
  }

  handleUpdate = (id) =>{
    const tempItems = this.state.items.filter( i => i.id !== id);
    const selectedItem = this.findItem(id);
    this.setState({
      items: tempItems,
      item: selectedItem.item,
      id : id,
      editItem:true
    })

  }

  findItem = (id) => {
    return this.state.items.find(i => i.id === id);
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem = {this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClean={this.handleClean}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />
          </div>
        </div>

      </div>
    );
  }

}

export default App;
