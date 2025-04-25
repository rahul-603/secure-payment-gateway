# Secure Payment Gateway

This project is a full-stack application for secure payment processing. It allows users to register, log in, make payments using PayPal, and view their transaction history.

---

## **Features**
1. **User Authentication**:
   - Signup and login functionality.
   - Passwords are securely hashed using bcrypt.
   - JWT-based authentication for secure API access.

2. **Payment Processing**:
   - Integration with PayPal for creating and capturing orders.
   - Dynamic payment amounts.

3. **Transaction Management**:
   - Save transaction details (e.g., order ID, payer ID, amount, currency) in MongoDB.
   - View transaction history in the frontend.

4. **Responsive Frontend**:
   - Built with React.js.
   - Styled using CSS and inline styles.
   - Notifications using React Toastify.

5. **Secure Backend**:
   - Built with Node.js and Express.js.
   - MongoDB for data storage.
   - Environment variables for sensitive data.

---

## **Steps to Run the Project**

1. **Extract the Project**
   - After downloading the project from GitHub as a ZIP file, extract it to your desired location.

2. **Set Up the Backend**
   - Navigate to the `backend/` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up environment variables in the `.env` file.

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend**
   - Navigate to the `frontend/` folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up environment variables in the `.env` file.

   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`.

5. **Test User Accounts**
   - Use the following test accounts from the `passwords.txt` file:
     - **Seller Account**:
       - Email: `rahulk@merchant.example.com`
       - Password: `GetThings`
     - **Buyer Account**:
       - Email: `rahulk@personal.example.com`
       - Password: `BuyThings`

---

## **Technologies Used**
### **Frontend**
- React.js
- React Router DOM
- React Toastify
- Axios
- PayPal React SDK

### **Backend**
- Node.js
- Express.js
- MongoDB
- PayPal SDK
- JSON Web Token (JWT)

---

## **Folder Structure**
```
secure-payment-gateway/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── README.md
```

---

## **Summary**
This project demonstrates a secure and scalable payment gateway solution. It integrates PayPal for payment processing, uses MongoDB for data storage, and provides a responsive user interface with React.js. The backend ensures security with JWT-based authentication and bcrypt for password hashing. This project is ideal for learning full-stack development and payment gateway integration.
