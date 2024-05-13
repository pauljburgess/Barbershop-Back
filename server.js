require("dotenv").config()
require('./config/db.connection')
const { PORT } = process.env
const express = require("express");
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const barbersRouter = require('./routes/barbers')
const AuthRouter = require('./routes/AuthRouter')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use('/barbers', barbersRouter)
app.use('/auth', AuthRouter)





app.listen(PORT, () => console.log(`Magic happening on PORT ${PORT}!`))