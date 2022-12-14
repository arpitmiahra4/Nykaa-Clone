import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MAIN from './components/Profile/Main'

const Main = () => {
  return(
    <Routes>
        <Route path="/profile/*" element={<MAIN />} />
    </Routes>
  )
}

export default Main