import { Login } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Myprofile from './Myprofile'
import Orders from './Orders'
import SavedPayment from './SavedPayment'
import Wallet from './Wallet'
import Wishlist from './Wishlist'

const AllRoutesProfile = () => {
  return ( 
    <Routes>
      <Route path='myprofile' element={<Home/>}/>
      <Route path="/" element={<Myprofile/>}/>
      <Route path='Mydatee' element={<Myprofile />}/>
      <Route path="wallet" element={<Wallet />}/>
      <Route path="orders" element={<Orders />}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='savedpayment' element={ <SavedPayment />} />
     
      {/* <Route path='Payment' element={<Payment/>}/> */}
    </Routes>
  
  )
}

export default AllRoutesProfile