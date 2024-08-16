import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const user = useSelector((state)=>state.userInfo.user)
    return (
        <nav>
            <h1>Restricted route</h1>
            <ul>
                {!user && (<Link to="/login">
                    <li>Login</li>
                </Link> )}
                {user && (<>
                <Link to="/settings">
                    <li>Settings</li>
                </Link>
                <li>Logout</li>
                </>)}
            </ul>
        </nav>
    )
}

export default NavBar