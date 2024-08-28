const Student = require('../models/studentModel');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student by ID
exports.updateStudent = async (req, res) => {
  try {
    const [updated] = await Student.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student by ID
exports.deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};