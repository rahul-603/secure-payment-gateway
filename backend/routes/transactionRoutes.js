const express = require("express");
const Transaction = require("../models/Transaction");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/save-transaction", async (req, res) => {
    try {
        console.log("Incoming Transaction Data:", req.body); // ✅ Log Request Data
        
        const { orderID, payerID, amount, currency } = req.body;
        const transaction = new Transaction({ orderID, payerID, amount, currency });

        const savedTransaction = await transaction.save();
        console.log("Saved Transaction:", savedTransaction); // ✅ Log Saved Data
        
        res.status(201).json({ message: "Transaction saved successfully!" });
    } catch (error) {
        console.error("Error saving transaction:", error);
        res.status(500).json({ message: "Error saving transaction" });
    }
});

router.get("/transactions", verifyToken, async (req, res) => {
    try {
      console.log("Fetching transactions...");
      const transactions = await Transaction.find({});
      console.log("Transactions fetched:", transactions);
      res.json(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      res.status(500).json({ message: "Error fetching transactions" });
    }
});

module.exports = router;