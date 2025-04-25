import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/NavBar";
import PaymentPage from "./pages/PaymentPage";
import Success from "./components/Success";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TransactionHistory from "./pages/TransactionHistory"; // Import TransactionHistory

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} /> {/* Add ToastContainer */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <PaymentPage /> : <Navigate to="/login" />} />
        <Route path="/transactions" element={isLoggedIn ? <TransactionHistory /> : <Navigate to="/login" />} /> {/* Add TransactionHistory route */}
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;