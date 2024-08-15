import React from 'react'
import NavBar from '../Components/NavBar'
import { useParams } from 'react-router-dom'

const Users = () => {
    const {userName} = useParams()
    return (
        <div>
            {/* <NavBar/> */}
            <h1>Users: {userName}</h1>
        </div>
    )
}

export default Users 