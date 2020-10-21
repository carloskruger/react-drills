import React from 'react';

import './App.css';

const myFriends = ["Charles","Irina","MingJing", "Cathy"]
function App() {
 
  return (
    <div >
      {
      myFriends.map((friend) => (<h5>{friend}</h5> ))
      }
    </div>
  );
}

export default App;
