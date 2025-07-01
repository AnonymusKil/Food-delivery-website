import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LogInPopUp from './components/LogInPopUp/LogInPopUp'
function App() {
  const[showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LogInPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App