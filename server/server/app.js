const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');
const sequelize = require('./config/dbConfig');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', formRoutes);

sequelize.sync().then(() => console.log('Database synced'));

module.exports = app;
