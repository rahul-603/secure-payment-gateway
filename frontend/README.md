###**README for 

frontend

**

```md
# Frontend - Secure Payment Gateway

This is the frontend of the Secure Payment Gateway project, built using React.js. It provides the user interface for user authentication, payment processing, and transaction history.

---

##**Steps to Run the Frontend**

1.**Extract the Project**
   - After downloading the project from GitHub as a ZIP file, extract it to your desired location.

2.**Navigate to the Frontend Folder**
   ```bash
   cd frontend
   ```

3. **Install Dependencies**
   - Ensure you have Node.js installed on your system.
   - Run the following command to install the required dependencies:
     ```bash
     npm install
     ```

4. **Set Up Environment Variables**
   - Open the `.env` file in the `frontend/` directory.
   - Ensure the `REACT_APP_PAYPAL_CLIENT_ID` is set to your PayPal client ID:
     ```
     REACT_APP_PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
     ```

5. **Start the Development Server**
   - Run the following command to start the React development server:
     ```bash
     npm start
     ```
   - Open your browser and navigate to `http://localhost:3000`.

6. **Test User Accounts**
   - Use the following test accounts from the `passwords.txt` file:
     - **Seller Account**:
       - Email: `rahulk@business.example.com`
       - Password: `Rahulk@7813`
     - **Buyer Account**:
       - Email: `rahulk@personal.example.com`
       - Password: `BuyThings`

7. **Features**
   - **Signup/Login**: Users can register and log in to their accounts.
   - **Payment**: Users can make payments using PayPal.
   - **Transaction History**: Users can view their past transactions.

8. **Build for Production**
   - To create a production build, run:
     ```bash
     npm run build
     ```
   - The build files will be generated in the `build/` folder.

---

### **Folder Structure**
- `src/`: Contains the source code.
  - `components/`: Reusable React components.
  - `pages/`: Pages like Login, Signup, PaymentPage, and TransactionHistory.
  - `context/`: Context for managing global state (e.g., authentication).
  - `utils/`: Utility functions (e.g., token management).
- `public/`: Contains static assets like `index.html` and images.

---

### **Dependencies**
- React.js
- React Router DOM
- React Toastify
- Axios
- PayPal React SDK
```

---

### **README for 

backend

**

```md
# Backend - Secure Payment Gateway

This is the backend of the Secure Payment Gateway project, built using Node.js and Express.js. It handles user authentication, payment processing, and transaction management.

---

## **Steps to Run the Backend**

1. **Extract the Project**
   - After downloading the project from GitHub as a ZIP file, extract it to your desired location.

2. **Navigate to the Backend Folder**
   ```bash
   cd backend
   ```

3. **Install Dependencies**
   - Ensure you have Node.js installed on your system.
   - Run the following command to install the required dependencies:
     ```bash
     npm install
     ```

4. **Set Up Environment Variables**
   - Open the `.env` file in the `backend/` directory.
   - Ensure the following variables are set:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/secure-payment
     JWT_SECRET=YOUR_SECRET_KEY
     PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
     PAYPAL_CLIENT_SECRET=YOUR_PAYPAL_CLIENT_SECRET
     ```

5. **Start the

 Backend

 Server**
   - Run the following command to start the server:
     ```bash
     npm start
     ```
   - The server will run on `http://localhost:5000`.

6. **Features**
   - **User Authentication**: Signup, login, and JWT-based authentication.
   - **Payment Processing**: Integration with PayPal for creating and capturing orders.
   - **Transaction Management**: Save and retrieve transaction details.

---

### **Folder Structure**
- `routes/`: Contains route files for authentication, payments, and transactions.
- `models/`: Mongoose models for User and Transaction.
- `middleware/`: Middleware for authentication (e.g., JWT verification).
- `config/`: Database configuration file (`db.js`).

---

### **Dependencies**
- Express.js
- Mongoose
- Bcrypt.js
- JSON Web Token (JWT)
- PayPal SDK
- dotenv
```

---

### **README for the Entire Project**

```md
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
   - Navigate to the 

frontend

 folder:
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
       - Email: `rahulk@business.example.com`
       - Password: `Rahulk@7813`
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
```
