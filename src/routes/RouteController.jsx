import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import SingleProduct from './SingleProduct/SingleProduct'


const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/singlepage/:id' element={<SingleProduct/>} />
        
    </Routes>
  )
}

export default RouteController