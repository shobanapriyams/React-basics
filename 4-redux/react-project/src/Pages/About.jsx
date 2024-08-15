import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFruit } from '../slices/fruitSlice'

const About = () => {
  // const {userName} = useParams()
  const [fruit, setFruitInfo] = useState("")

  const dispatch = useDispatch()
  const addFruit = () => {
    dispatch(setFruit(fruit))
  }
  return (
    <div>
      {/* <NavBar/> */}
      <h1>About</h1>
      <input type="text" placeholder="Enter a fruit name" onChange={(e) => setFruitInfo(e.target.value)} />
      <button onClick={addFruit}>Add Fruit</button>
      </div>
  )
}

export default About