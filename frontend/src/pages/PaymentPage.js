import React, { useState } from "react";
import PayButton from "../components/PayButton";

const PaymentPage = () => {
  const [amount, setAmount] = useState(""); // State to store the input amount

  const handleInputChange = (e) => {
    setAmount(e.target.value); // Update the amount dynamically
  };

  return (
    <div style={{ backgroundColor: "hsla(20,0%,0%,0.4)", marginTop: "30px", borderRadius: "30px" , color: "white", fontSize: "1.5em", fontFamily: "inter", justifyContent: "center", textAlign: "center", padding: "20px" }}>
      <h2>Secure Payment</h2>
      <p>Complete your payment using PayPal</p>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          fontSize: "1em",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      {<PayButton amount={amount} />} {/* Pass the dynamic amount to PayButton */}
    </div>
  );
};

export default PaymentPage;
