import React from 'react'
import { NETFLIX_LOGO } from '../util/util'

const Header = () => {
  return (
    <div className="absolute w-60 mx-20 px-8 py-5 shadow-lg bg-gradient from-black z-10 "> 
        <img src= {NETFLIX_LOGO}  alt='logo' />
    </div>
  )
}

export default Header
