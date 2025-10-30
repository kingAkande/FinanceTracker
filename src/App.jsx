import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  useState } from "react";
import Header from "./Pages/Header";
import Dashboard from "./Pages/Dashboard";
import Pgnotfound from "./Pages/Pgnotfound";
// import Login from "./Pages/Login";
// import PageNav from "./Components/PageNav";
import Transaction from "./Pages/Transaction";
import AddTransaction from "./Pages/AddTransaction";
import Budgets from "./Pages/Budgets";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function App() {
  const[amount, setAmount] = useState("");
  const[description, setDiscription] = useState("");
  const[category, setCategory] = useState("");
  const[notes, setNotes] = useState("");
  const[date , setDate] = useState("");
  const[transactions , setTransactions] = useState([]);  
  const[editingIndex , setEditingIndex] = useState(null);
  const[isEditing , setIsEditing]= useState(false);


  function edit(index){
    const itemToEdit = transactions[index];

    setAmount(itemToEdit.amount);
    setDiscription(itemToEdit.description);
    setCategory(itemToEdit.category);
    setNotes(itemToEdit.notes);
    setDate(itemToEdit.date);

    setIsEditing(true);
    setEditingIndex(index);
  }

  return (
    <div>
      {/* <Header/> */}
      {/* <PageNav/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard newTRansaction={transactions} />} />
          {/* <Route path="header" element={<Header/>} /> */}
          <Route
            path="transaction"
            element={<Transaction isEditing={isEditing} editingIndex={editingIndex} newTRansaction={transactions} onsetTx={setTransactions} onEdit={edit} />}
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
                isEditing={isEditing}
                editingIndex={editingIndex}
                setEditingIndex={setEditingIndex}
                setIsEditing={setIsEditing}
              />
            }
          />
          <Route path="report" element={<Reports />} />
          <Route path="budget" element={<Budgets />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Pgnotfound />} />
          <Route path="signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
