import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Usestate from './Usestate'

const Routerrrr = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/shop' Component={Shop}/>
        <Route path='/usestate' Component={Usestate}/>
      </Routes>
    </div>
  )
}

export default Routerrrr
