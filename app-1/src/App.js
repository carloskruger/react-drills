import React, {Component} from 'react';

import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    text: ''
  }



}


  render(){
  return (
    <div>

<input type="text" onChange={(e) => this.setState({text: e.target.value})} />
<div className="textdiv"> {this.state.text}</div>
    </div>
  );
}
}
export default App;
