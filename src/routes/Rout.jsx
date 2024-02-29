import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Error } from '../pages/Error/Error'
import { Home } from '../pages/Home/Home'
import { Liked } from '../pages/Liked/Liked'
import { Order } from '../pages/Order/Order'
import { Purchase } from '../pages/Purchase/Purchase'
import { Single } from '../pages/Single/Single'

export const Rout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/liked' element={<Liked/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/products/:id' element={<Single/>} />
        <Route path='/purchase' element={<Purchase/>} />
        <Route path='/*' element={<Error/>} />
    </Routes>
  )
}
