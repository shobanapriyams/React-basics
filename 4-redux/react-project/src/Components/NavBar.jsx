// import NavBarCSS from "./NavBarCSS"

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <h1>Grony</h1>
        <ul>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/users">Users</Link>
            <Link to = "/contact">Contact</Link>
        </ul>
    </nav>
  )
}

export default NavBar