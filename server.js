require("dotenv").config()
require('./config/db.connection')
const { PORT } = process.env
const express = require("express");
const session = require('express-session');

const app = express()
const cors = require('cors')
const morgan = require('morgan')

const barbersRouter = require('./routes/barbers')
const servicesRouter = require('./routes/services')
const appointmentsRouter = require('./routes/appointments')
const bookingsRouter = require('./routes/bookings')
const AuthRouter = require('./routes/AuthRouter')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use('/barbers', barbersRouter)
app.use('/services', servicesRouter)
app.use('/appointments', appointmentsRouter)
app.use('/bookings', bookingsRouter)
app.use('/auth', AuthRouter)
app.use(session({
  secret: 'your-secret-key', // Important for security
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You have visited this page ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the session demo!');
  }
});




app.listen(PORT, () => console.log(`Magic happening on PORT ${PORT}!`))