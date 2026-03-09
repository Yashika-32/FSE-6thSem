import React from 'react'

const Header = (props) => {
    console.log(props);
  return (
    <div>
      <h1>Header</h1>
      <h4>{props.name}</h4>
      <h5>{props.ans}</h5>
    </div>
  )
}

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

export default Header
export {sum, multiply}