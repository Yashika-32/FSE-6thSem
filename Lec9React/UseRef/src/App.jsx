import React, { useRef, useState } from 'react'

const App = () => {
  let inputRef = useRef();
  let [showName, setShowName] = useState("");

  function changeName(){
    setShowName(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter name" />
      <button onClick={changeName}>Click</button>
      <h1>Name is {showName}</h1>
    </div>
  )
}

export default App

