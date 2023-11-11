import {Routes, Route} from "react-router-dom"
import HomePage from "./Components/HomePage"
import Workshop from "./Components/Workshop/Workshop"

function App() {
 return (
  <>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/workshops" element={<Workshop/>}/>
   </Routes>
  </>
 ) 
   
  
}

export default App
