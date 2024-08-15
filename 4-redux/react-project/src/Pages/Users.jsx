import React from 'react'
import NavBar from '../Components/NavBar'

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../slices/userSlice'


const Users = () => {

    const dispatch = useDispatch()

    const deleteUserInfo = (index) => {
        dispatch(deleteUser(index))
    }

    const users = useSelector((state) => state.usersInfo.users)
    console.log(users)
    return (
        <div>
            {users?.map((user, index) => {
                return (
                    <div key={index}>
                        <h2>{user.name}</h2>
                        <h2>{user.age}</h2>
                        <h2>{user.email}</h2>
                        <h2>{user.contact}</h2>
                        <button onClick={() => deleteUserInfo(index)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Users 