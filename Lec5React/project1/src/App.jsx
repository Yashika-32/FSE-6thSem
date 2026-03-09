import React from 'react';
function App(){
  return (
    <div>
        <Header></Header>
      <h1>Welcome to My React App!</h1>
    
    </div>
  );
}

//component jsx code jo html jesa dikhega return krega 

//component should start with capital letter
//component should return only one element

function Header(){
  return (
    <div>
      <div className="logo">Logo</div>
      <div className="navlinks">
        <li className="navlist">Home</li>
        <li className="navlist">About</li>
        <li className="navlist">Contact</li>
      </div>
    </div>
  )

  
}
export default App;
