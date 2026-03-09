import React from 'react'
import { useState } from 'react'

function App() {
  //state variable is a variable which is used to store the data in the
  //  component and it is used to update the data in the component.

  let [count, setCount] = useState(0);


  //let count=0;
  function increase(){
    count++;
    console.log(count);
  }
  return (
    <div>
      <h1>State Variable</h1>
      <h4>count : {count}</h4>
      <button onClick={increase}>Click</button>

    </div>
  )
}

export default App
