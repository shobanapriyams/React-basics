import React, { useEffect, useState, useLayoutEffect } from 'react'
import User from './User'

const Users = () => {

  const [count, setCount] = useState(0)

  //useEffect runs after DOM is painted, runs asynchronously

  //useLayoutEffect runs while DOM places an element, runs synchronously
  //can be used for high load animated websites

  useLayoutEffect(() => {
    console.log("count - useEffect", count)
  }, [count])

  return (
    <div>
      <h1>Users Component</h1>
      <button onClick={() => setCount((curr) => curr + 1)}>{count}</button>
      <User />
    </div>
  )
}

export default Users