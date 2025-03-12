import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Loging from './pages/Loging'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gray-300 w-full min-w-full h-800'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/order/:id' element={<Orders />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Loging />} />
        {/* Add more routes here */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App