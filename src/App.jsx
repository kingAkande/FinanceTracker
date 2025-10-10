import { BrowserRouter, Routes, Route } from "react-router-dom";
import { use, useState } from "react";
import Header from "./Pages/Header";
import Dashboard from "./Pages/Dashboard";
import Pgnotfound from "./Pages/Pgnotfound";
import Login from "./Pages/Login";
import PageNav from "./Components/PageNav";
import Transaction from "./Pages/Transaction";
import AddTransaction from "./Pages/AddTransaction";
import Budgets from "./Pages/Budgets";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";
import Home from "./Pages/Home";

function App() {
  const [amount, setAmount] = useState("");
  const [description, setDiscription] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const[date , setDate] = useState("");
  const[transactions , setTransactions] = useState([]);  
  

  return (
    <div>
      {/* <Header/> */}
      {/* <PageNav/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="header" element={<Header/>} /> */}
          <Route path="login" element={<Login />} />
          <Route
            path="transaction"
            element={<Transaction newTRansaction={transactions}  />}
          />
          <Route
            path="addTransaction"
            element={
              <AddTransaction
                setAmount={setAmount}
                setDiscription={setDiscription}
                setCategory={setCategory}
                setNotes={setNotes}
                setTransactions={setTransactions}
                setDate={setDate}
                amount={amount}
                description={description}
                category={category}
                notes={notes}
                date={date}
              />
            }
          />
          <Route path="report" element={<Reports />} />
          <Route path="budget" element={<Budgets />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Pgnotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
