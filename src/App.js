import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  About,
  Products,
  Cart,
  Checkout,
  SingleProduct,
  Error,
  AuthWrapper,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
