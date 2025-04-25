import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="Success Icon"
            style={styles.icon}
          />
        </div>
        <h2 style={styles.heading}>Payment Successful 🎉</h2>
        <p style={styles.message}>
          Thank you for your payment! Your transaction has been successfully processed.
        </p>
        <button style={styles.button} onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "500px",
    width: "90%",
  },
  iconContainer: {
    marginBottom: "20px",
  },
  icon: {
    width: "80px",
    height: "80px",
  },
  heading: {
    fontSize: "2em",
    color: "#4caf50",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2em",
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};

export default Success;
