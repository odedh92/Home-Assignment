import React from 'react'
import './header.css'
import WALLPAPER from '../../assets/Wallpaper.png'
const Header = () => {
  return (
    <div className='background'>
        <img src={WALLPAPER} alt="wallpaper" className='background-image'/>
    </div>
  )
}

export default Header