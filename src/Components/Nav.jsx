import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='p-10 w-full h-[30%] bg-zinc-500 text-white flex items-center justify-between'>
    <div className='text-3xl font-bold'>
      <h1>Wellcome</h1>
    </div>
    <div className='flex gap-9 text-xl font-semibold'>
      <Link to='/home'><h1>Home</h1></Link>
      <Link to='/about'><h1>About</h1></Link>
      <Link to='/shop'><h1>Shop</h1></Link>
      <Link to='/usestate'><h1>Usestate</h1></Link>
      <Link to='/props'><h1>Props</h1></Link>
      <Link to='/context'><h1>Context</h1></Link>
    </div>
  </div>
  )
}

export default Nav
