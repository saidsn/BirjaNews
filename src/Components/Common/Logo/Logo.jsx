import React from 'react'
import logo from "../../../Assets/Images/logo_4x.png";
import "./Logo.css"
import { Link } from 'react-router-dom';
const Logo=()=> {
  return (
    <>
    <Link to="/"  className='logoLink'><img src={logo} alt="Logo Birjanews" className='logo'/></Link>
      
    </>
  )
}

export default Logo