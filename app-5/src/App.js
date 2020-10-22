import React, {Component} from 'react';
import Image from './components/Image'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { url: "https://larepublica.pe/resizer/zh1ny0HfRyaEqNOruOXbPWKMjbY=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/KECWZFIYCFBOZDI6CGGBFITHWY.jpg"}
    }
  render(){
  
  return (
    <div >
  <Image url={this.state.url} />
  
    </div>
  );
  }
}

export default App;
