import React from 'react'
import Header from './component/headerComponent/Header'
import Footer from './component/FooterComponent/Footer'
import {sum} from './component/headerComponent/Header'
import {multiply} from './component/headerComponent/Header'
const App = () => {
  let ans=sum(2,5);
  return (
    <div>
      <Header ans={ans} name="Yashika"></Header>
      <Footer></Footer>
    </div>
  )
}

export default App