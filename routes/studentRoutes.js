const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const verifyToken = require('../middlewares/authMiddleware');
const checkApiKey = require('../middlewares/apiKeyMiddleware');

// Secure your routes
router.post('/create', verifyToken, checkApiKey, studentController.createStudent);

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;