import React, { createContext, useEffect, useMemo, useState } from 'react'
import Container from './Container'

export const ThemeContext = createContext()

function App() {
  const [num1, setNum1] = useState(200)
  const [num2, setNum2] = useState(1000)
  const [input, setInput] = useState("")

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }


  // const doubleNumber = slowFunction(number); //renders all state consuming more memory

  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number)
  // }, [])

  const [doubleNumber, setDoubleNumber] = useState(0)

  useEffect(() => {
    setDoubleNumber(slowFunction(number))
  }, [number])


  // const themeStyle = {
  //   backgroundColor: dark? "black" : "white",
  //   color: dark? "white": "black"
  // }

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }
  }, [dark])

  useEffect(() => { //runs quickly as and when website loads
    // setNum1(200)
    console.log("use effect is running")

    return () => { //memory need to be cleaned to make sure there is no data leackage
      setNum1(200) // or null value can be set
      console.log("Memory cleaned")
    }
  }, [num1, num2])

  console.log(num1);

  return (
    <ThemeContext.Provider
    value={({
      theme: theme
    })}
    >
    <div style={themeStyle}>
      {/* <h1>{num1}</h1>
      <button onClick={() => setNum1((curr) => curr + 1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={() => {
        setNum2((curr) => {
          return curr + 1
        })
      }}>Add</button>
      <input
      type="text"
      value={input}
      onChange={(event) => setInput(event.target.value)}
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>{doubleNumber}</h1>
      <button onClick={() => setDark((curr) => !curr)}>Change Theme</button> */}
    <button onClick={toggleTheme}>Toggle Theme</button>
    <h1>App Component</h1>
    <Container/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App

function slowFunction(number) {
  console.log("running slow")
  for (let i = 0; i > 100000000000; i++) { }
  return number * 2
}