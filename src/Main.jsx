import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/ProductPage/Products'
import MAIN from './components/Profile/Main'
import HomePage from './components/Home/HomePage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Login from './components/Authentication/Login'
const Main = () => {
  return(
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/profile/*" element={<MAIN />} />
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default Main