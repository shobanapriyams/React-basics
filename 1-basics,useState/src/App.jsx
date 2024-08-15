import { useState } from "react"
// import User from "./User"

// const userValue = {
// name : "Shobi",
// age : 30,
// phoneNumber : "9874563210",
// email : "shobi@gmail.com"
// }

// const newUser = {...userValue, gender: "Female", age: 25}
// console.log(newUser)

// let {name, age, phoneNumber, email} = userValue

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    // setCounter(2) //value set inside function
    setCounter((currentVal) => { //value set using callback function
      return currentVal + 1
    })
  }
  console.log(counter)
   return (
    <>
    <h1>Hello</h1>
    <h1>{counter}</h1>
    <button onClick={handleCounter}>Add</button>
    {/* <User
    // myName={userValue.name}
    // myAge={userValue.age}
    // myPhone={userValue.phoneNumber}
    // myEmail={userValue.email}
    {...newUser}
    /> */}
    {/* <User
    myName={name}
    myAge={age}
    myPhone={phoneNumber}
    myEmail={email}
    /> */}
    </>
   )  
}

// function Shobi() {
//   return <h1>My details are as provided above</h1>;
// }


// export {App, Shobi};

export default App;