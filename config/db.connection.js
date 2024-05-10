const mongoose = require("mongoose")
const { DATABASE_URI } = process.env

mongoose.connect(DATABASE_URI)

mongoose.connection
    .on("open", () => console.log(`Mongoose has connected you to database ${mongoose.connection.name}`))
    .on("close", () => console.log(`Mongoose has disconnected you from database ${mongoose.connection.name}`))
    .on("error", () => console.log(error))