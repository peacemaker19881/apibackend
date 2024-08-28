const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('./config/dbConfig');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middlewares/errorHandler');
const rateLimiter = require('./middlewares/rateLimitMiddleware');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimiter);  // Apply rate limiting to all requests

app.use('/api/v1/students', studentRoutes);

app.use(errorHandler); // Global error handler

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});