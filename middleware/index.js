// To create the authentication for this app, the lesson by John A. Jacobs from GA was followed. Much if not all of the code pertaining to it will be identical to his.

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
    let passwordMatch = await bcrypt.compare(password, storedPassword)
    return passwordMatch
}

const createToken = (payload) => {
    let token = jwt.sign(payload, APP_SECRET)
    return token
}

const verifyToken = (req, res, next) => {
    const { token } = res.locals
    try {
        let payload = jwt.verify(token, APP_SECRET)
        if (payload){
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({status: 'Error', msg: 'Unauthorised'})
    } catch(error) {
        console.log(error)
        res.status(401).send({status: 'Error', msg: 'Verify token error!'})
    }
}

const stripToken = (req, res, next) => {
    try{
        console.log(req.headers['authorization'])
        const token = req.headers['authorization'].split(' ')[1]
        if (token) {
            res.locals.token = token
            return next()
        }
        res.status(401).send({status: 'Error', msg: 'Unauthorised'})
    } catch (error) {
        console.log(error)
        res.status(401).send({status: 'Error', msg: 'Strip token error!'})
    }
}

module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword
}