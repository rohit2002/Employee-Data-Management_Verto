const express = require('express');
const router = express.Router();

const {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../Controllers/employeeController');

// Create
router.post('/', addEmployee);

// Read
router.get('/', getAllEmployees);        // Get all employees
router.get('/:id', getEmployeeById);    // Get employee by ID

// Update
router.put('/:id', updateEmployee);

// Delete
router.delete('/:id', deleteEmployee);

module.exports = router;
