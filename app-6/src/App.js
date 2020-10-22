import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Todo from './component/Todo'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasklist: ["one task", "second task"],
      inputValue: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputValue(value){ 
    console.log("value", value)
    this.setState({inputValue: value})
  }

  handleAddTask() {
    this.setState({
      tasklist: [...this.state.tasklist, this.state.inputValue],
      inputValue: ""
    });
  }

  render(){
    let list = this.state.tasklist.map((elem, index) => {
      return <Todo key={index} task={elem} />
    });
  return (
    <div >
      <h1> My to-do list:</h1>
      <input type="text" onChange={e => this.handleInputValue(e.target.value)} />
      <button onClick={this.handleAddTask}>Add task</button>
      {list}
     
    </div>
  );
}
}


export default App;
