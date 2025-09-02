import { BrowserRouter, Routes , Route } from "react-router-dom"
import Header from "./Pages/Header"
import Dashboard from "./Pages/Dashboard"
import Pgnotfound from "./Pages/Pgnotfound"
import Login from "./Pages/Login"
import PageNav from "./Components/PageNav"
import Transaction from "./Pages/Transaction"
import AddTransaction from "./Pages/AddTransaction"
import Budgets from "./Pages/Budgets"
import Settings from "./Pages/Settings"
import Reports from "./Pages/Reports"
import Home from "./Pages/Home"


function App() {

return (
  <div >
    <Header/>
    {/* <h1>run oo</h1> */}
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="dashboard" element={<Dashboard/>}/> 
      {/* <Route path="header" element={<Header/>} /> */}
      <Route path="login" element={<Login/>} />
      <Route path="transaction" element={<Transaction/>}/>
      <Route path="addTransaction" element={<AddTransaction/>}/>
      <Route path="report" element={<Reports/>}/>
      <Route path="budget" element={<Budgets/>}/>
      <Route path="settings" element={<Settings/>} />
      <Route path="*" element={<Pgnotfound/>}/>
    </Routes>
  </BrowserRouter>
  </div>
)
}

export default App
