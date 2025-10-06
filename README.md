# Fullstack Project Setup Guide

This project includes both **frontend** and **backend** parts. Follow the steps below to set up and run it locally.

---

## 🖥️ Frontend Setup

1. Navigate to the `frontend` folder.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the frontend:

   ```bash
   npm run dev
   ```
4. The main file for the frontend is **main.jsx**.
5. If you are using the frontend and backend on **different systems**, update the backend IP address in:

   ```
   src/Components/dashboard/apiUrl.js
   ```

---

## ⚙️ Backend Setup

1. Navigate to the `backend` folder.
2. Install dependencies:

   ```bash
   npm install
   ```
3. The main file for the backend is **server.js**.
4. Start the server using either of these commands:

   ```bash
   nodemon server.js
   ```

   or

   ```bash
   node server.js
   ```
5. Database connection settings are located inside:

   ```
   config/db.js
   ```

---

## Notes

* Make sure MongoDB (or your configured database) is running before starting the backend.
* The frontend will connect to the backend using the API URL defined in `apiUrl.js`.

---

### Now you're ready to run your fullstack app!

<!-- Contact -->

If you face any issues running the project, please contact:
Email: malviyarohit1602@gmail.com

Mobile: +91 8458959348
