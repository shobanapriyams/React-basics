import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Users from "./Pages/Users"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NavBar from "./Components/NavBar"
import Error from "./Pages/Error"

function App() {

  return (
<BrowserRouter>
<NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/users/:userName" element={<Users/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="*" element={<Error/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
