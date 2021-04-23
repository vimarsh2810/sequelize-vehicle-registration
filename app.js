const path = require('path');

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRouter = require('./routes/auth.routes.js');
const userRouter = require('./routes/user.routes.js');
const vehicleRouter = require('./routes/vehicle.routes.js');
const vehicleRegistrationRouter = require('./routes/vehilceRegistration.routes.js');
const apiRouter = require('./routes/api.routes.js');
const csvRouter = require('./routes/csv.routes.js');

const sequelize = require('./configs/connection.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);

app.use('/user', userRouter);

app.use('/vehicle', vehicleRouter);

app.use('/vehicleRegistration', vehicleRegistrationRouter);

app.use('/api', apiRouter);

app.use('/csv', csvRouter);

const PORT = process.env.APP_PORT;

sequelize.sync({ force: false, logging: false })
  .then(result => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(err => {
    console.log(err.name, err.message);
  });