const express = require("express");
const app = express();
const db = require("./config/db"); 
 
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());              
require("dotenv").config();
const employeeRoutes = require('./Routes/employeeRoutes');

app.use('/api/employees', employeeRoutes);


app.use(express.urlencoded({ extended: true })); 



 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
