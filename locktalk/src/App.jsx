import {BrowserRouter,Routes,Route}from "react-router-dom"
import './App.css'
import Success from "./Success"
import Secret from "./secret"

function App (){ 
   return(
      <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Secret/>}></Route>
      <Route path="/Success" element={<Success/>}></Route>
   </Routes>
   </BrowserRouter>
      </>
   )
}
export default App
