import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Usestate from './Usestate'
import PropsD from './PropsD'
import Context from './Context'

const Routerrrr = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/shop' Component={Shop}/>
        <Route path='/usestate' Component={Usestate}/>
        <Route path='/props' Component={PropsD}/>
        <Route path='/context' Component={Context}/>
      </Routes>
    </div>
  )
}

export default Routerrrr
