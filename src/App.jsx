import { BrowserRouter, Routes , Route } from "react-router-dom"
import Header from "./Pages/Header"
import Dashboard from "./Pages/Dashboard"
import Pgnotfound from "./Pages/Pgnotfound"
import Login from "./Pages/Login"
import PageNav from "./Components/PageNav"


function App() {

return (
  <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="header" element={<Header/>} />
      <Route path="login" element={<Login/>} />
      <Route path="*" element={<Pgnotfound/>}/>

    </Routes>
  </BrowserRouter>
  </div>
)
}

export default App
