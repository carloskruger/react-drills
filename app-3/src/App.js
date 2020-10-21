import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
       unfilteredCars: ["volkswagen","ford","chrysler","toyota","nissan","audi"],
       userInput: '',
       filteredCars: []
    }
  }

    
filterString(prop) {
    
    let filteredCars = [];

    for ( let i = 0; i < this.state.unfilteredCars.length; i++ ) {
      if ( this.state.unfilteredCars[i].includes(prop) ) {
        filteredCars.push(this.state.unfilteredCars[i]);
      }
    }

    this.setState({ filteredCars: filteredCars });
  }

  render(){
  return (
    <div>
    <input onChange={ (e) => this.filterString(e.target.value) }/>
    {
    this.state.filteredCars.map((car) => (<h2>{car}</h2> ))
  }
    </div>
  );
  }
}

export default App;
