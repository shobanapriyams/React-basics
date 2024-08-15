import React from 'react'
import NavBar from '../Components/NavBar'
import { useSelector } from 'react-redux'

const Contact = () => {
const fruits = useSelector((state) => state.fruitsInfo.fruits) 
console.log(fruits)
    return (
        <div>
            {/* <NavBar/> */}
            <h1>Contact</h1>
        </div>
    )
}

export default Contact