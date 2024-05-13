// To create the authentication for this app, the lesson by John A. Jacobs from GA was followed. Much if not all of the code pertaining to it will be identical to his.
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true},
        passwordDigest: { type: String, required: true},
    }, { timestamps: true}
)

module.exports = mongoose.model("User", userSchema)