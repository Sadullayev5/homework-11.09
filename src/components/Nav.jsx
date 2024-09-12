import { BiLogInCircle } from "react-icons/bi"; 
import { BiHomeAlt } from "react-icons/bi"; 
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to='/'><BiHomeAlt /> Home</Link></li>
            <li><Link to='/login'><BiLogInCircle /> Login</Link></li>
        </ul>
    </nav>
  )
}

export default Nav