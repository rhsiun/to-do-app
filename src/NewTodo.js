import React, { Component } from 'react'
import './Todo.css';

export class NewTodo extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row" id={this.props.div_id}>
        <input type="text" className="col" id={this.props.input_id} placeholder="Enter an event"></input>
        <button className="col" id={this.props.button_id} onClick={this.props.handleAddEvent.bind(this)}>+</button>
      </div>
    )
  }
}

export default NewTodo
