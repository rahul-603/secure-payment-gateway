# Frontend - Secure Payment Gateway

This is the frontend of the Secure Payment Gateway project, built using React.js. It provides the user interface for user authentication, payment processing, and transaction history.

---

## **Steps to Run the Frontend**

1. **Extract the Project**
   - After downloading the project from GitHub as a ZIP file, extract it to your desired location.

2. **Navigate to the Frontend Folder**
   ```bash
   cd frontend

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

## **Folder Structure**
- `src/`: Contains the source code.
  - `components/`: Reusable React components.
  - `pages/`: Pages like Login, Signup, PaymentPage, and TransactionHistory.
  - `context/`: Context for managing global state (e.g., authentication).
  - `utils/`: Utility functions (e.g., token management).
- `public/`: Contains static assets like `index.html` and images.
