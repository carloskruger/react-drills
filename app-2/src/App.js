import React from 'react';

import './App.css';

const myFriends = ["Charles","Irina","MingJing", "Cathy"]
function App() {
 
  return (
    <div >
      {
      myFriends.map((friend) => (<h2>{friend}</h2> ))
      }
    </div>
  );
}

export default App;
