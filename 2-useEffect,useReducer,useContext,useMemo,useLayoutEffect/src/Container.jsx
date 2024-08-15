import React, { useReducer } from 'react'
import Users from './Users'

const Container = () => { //useReducer hook example

  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
  }

  function reducerFn(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 }
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducerFn, { count: 1 })

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT})
  }

  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT})
  }

  return (
    <div>
      <h1>Container Component</h1>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
      <Users />
    </div>
  )
}

export default Container