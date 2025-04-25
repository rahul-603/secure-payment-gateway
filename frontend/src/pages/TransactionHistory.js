import React, { useEffect, useState } from "react";
import axios from "axios";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/transactions", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Pass token for authentication
          },
        });
        setTransactions(res.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Transaction History</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Payer ID</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            // Subtract 5 hours 30 minutes (19800000 milliseconds) from the timestamp
            const adjustedTimestamp = new Date(new Date(transaction.timestamp).getTime() - 5.5 * 60 * 60 * 1000);

            return (
              <tr key={transaction._id}>
                <td>{transaction.orderID}</td>
                <td>{transaction.payerID}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
                <td>
                  {adjustedTimestamp.toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    color: "white",
    textAlign: "center",
    backgroundColor: "hsl(60, 0%, 11%, 0.53)",
    marginTop: "20px",
    borderRadius: "25px",
    fontSize: "1.2em",
  },
  heading: {
    marginBottom: "30px",
    fontSize: "2em",
    color: "white",
  },
  table: {
    width: "100%",
    borderCollapse: "separate", // Use 'separate' to enable border-spacing
    borderSpacing: "0 30px", // Add vertical spacing (10px) between rows
    margin: "20px 0",
  },
  th: {
    border: "1px solid white",
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
  },
  td: {
    border: "1px solid white",
    padding: "20px",
    backgroundColor: "#222", // Optional: Add background color for better visibility
  },
};

export default TransactionHistory;