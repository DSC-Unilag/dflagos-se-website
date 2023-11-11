import HomePage from "./Components/HomePage"
import Workshop from "./Components/Workshop/Workshop"
import Style from "./style"
import {Route, Routes} from "react-router-dom"




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
