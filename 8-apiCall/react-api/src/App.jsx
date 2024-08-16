import React, { useEffect } from "react"
// import axios from "axios"
import axios from "./axios"

const App = () => {

  // async function apiCall() {
  //   const response = await fetch(
  //     "https://v2.jokeapi.dev/joke/Any"
  //   )
  //   const data = await response.json()

  //   console.log(data)
  // }

    async function apiCall() {
    const response = await axios.get(
      "/Any"
    )

    console.log(response.data)
  }

  useEffect (() => {
    apiCall()
  }, [])

  return (
    <div>
      <h1>Joke API</h1>
      <button onClick={apiCall}>Give me a joke</button>
    </div>
  )
}

export default App