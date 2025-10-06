const Employee = require('../Models/Employee');

// Add Employee (you already have this)
const addEmployee = async (req, res) => {
  try {
     
    console.log("Request Body:", req.body); // Debugging line
    const { employee_id, name, position, department } = req.body;

    if (!employee_id || !name || !position || !department) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existing = await Employee.findOne({ employee_id });
    if (existing) {
      return res.status(409).json({ message: "Employee ID already exists." });
    }

    const newEmployee = await Employee.create({ employee_id, name, position, department });

    res.status(201).json({ message: "Employee added successfully!", data: newEmployee });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Employee
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { employee_id, name, position, department } = req.body;

    const updated = await Employee.findByIdAndUpdate(
      id,
      { employee_id, name, position, department },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee updated successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Employee.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};
