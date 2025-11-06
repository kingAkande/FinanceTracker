// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {  useState } from "react";
// import Header from "./Pages/Header";
// import Dashboard from "./Pages/Dashboard";
// import Pgnotfound from "./Pages/Pgnotfound";
// import { AuthProvider } from "./Context/authContext";
// // import Login from "./Pages/Login";
// // import PageNav from "./Components/PageNav";
// import Transaction from "./Pages/Transaction";
// import AddTransaction from "./Pages/AddTransaction";
// import Budgets from "./Pages/Budgets";
// import Settings from "./Pages/Settings";
// import Reports from "./Pages/Reports";
// import Home from "./Pages/Home";
// import SignUp from "./Pages/SignUp";

// function App() {
//   const[amount, setAmount] = useState("");
//   const[description, setDiscription] = useState("");
//   const[category, setCategory] = useState("");
//   const[notes, setNotes] = useState("");
//   const[date , setDate] = useState("");
//   const[transactions , setTransactions] = useState([]);  
//   const[editingIndex , setEditingIndex] = useState(null);
//   const[isEditing , setIsEditing]= useState(false);


//   function edit(index){
//     const itemToEdit = transactions[index];

//     setAmount(itemToEdit.amount);
//     setDiscription(itemToEdit.description);
//     setCategory(itemToEdit.category);
//     setNotes(itemToEdit.notes);
//     setDate(itemToEdit.date);

//     setIsEditing(true);
//     setEditingIndex(index);
//   }

//   return (
//     <div>
//       {/* <Header/> */}
//       {/* <PageNav/> */}
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="dashboard" element={<Dashboard newTRansaction={transactions} />} />
//           {/* <Route path="header" element={<Header/>} /> */}
//           <Route
//             path="transaction"
//             element={<Transaction isEditing={isEditing} editingIndex={editingIndex} newTRansaction={transactions} onsetTx={setTransactions} onEdit={edit} />}
//           />
//           <Route
//             path="addTransaction"
//             element={
//               <AddTransaction
//                 setAmount={setAmount}
//                 setDiscription={setDiscription}
//                 setCategory={setCategory}
//                 setNotes={setNotes}
//                 setTransactions={setTransactions}
//                 setDate={setDate}
//                 amount={amount}
//                 description={description}
//                 category={category}
//                 notes={notes}
//                 date={date}
//                 isEditing={isEditing}
//                 editingIndex={editingIndex}
//                 setEditingIndex={setEditingIndex}
//                 setIsEditing={setIsEditing}
//               />
//             }
//           />
//           <Route path="report" element={<Reports />} />
//           <Route path="budget" element={<Budgets />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="*" element={<Pgnotfound />} />
//           <Route path="signup" element={<SignUp/>}/>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Pgnotfound from "./Pages/Pgnotfound";
import { AuthProvider } from "./Context/authContext";
import Transaction from "./Pages/Transaction";
import AddTransaction from "./Pages/AddTransaction";
import Budgets from "./Pages/Budgets";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
// ✅ Import the ProtectedRoute component
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [amount, setAmount] = useState("");
  const [description, setDiscription] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function edit(index) {
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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* ✅ Public routes (no auth required) */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />

            {/* ✅ Protected routes (auth required) - Wrap with ProtectedRoute */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard newTRansaction={transactions} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/transaction"
              element={
                <ProtectedRoute>
                  <Transaction
                    isEditing={isEditing}
                    editingIndex={editingIndex}
                    newTRansaction={transactions}
                    onsetTx={setTransactions}
                    onEdit={edit}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path="/addTransaction"
              element={
                <ProtectedRoute>
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
                </ProtectedRoute>
              }
            />

            <Route
              path="/report"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />

            <Route
              path="/budget"
              element={
                <ProtectedRoute>
                  <Budgets />
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* 404 page */}
            <Route path="*" element={<Pgnotfound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;